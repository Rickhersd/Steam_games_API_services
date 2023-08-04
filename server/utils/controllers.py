import pandas as pd
from server.utils.utils import sort_dict
from ast import literal_eval

def load_data():
  """
  Abre un archivo serializado y retorna el objeto cargado
  """
  dbfile = open('server/pkl/steam_games.pkl', 'rb')
  df = pd.read_pickle(dbfile)
  dbfile.close()
  return df


def count_items(items_dict, specs):
  if isinstance(specs, str):
    for spec in list(literal_eval(specs)):
      if spec in items_dict:
        items_dict[spec] += 1
      else:
        items_dict[spec] = 1

##############

def get_game(id):
  """
  Recibe un identificador y devuelve un diccionario con el videojuego asociado.
  """
  df = load_data()
  game = df[df['id'] == int(id)].to_dict(orient='records')[0]
  return game

   
##############

def get_game_list(year):
  """
  Se ingresa un año y devuelve una lista con los juegos lanzados en el año.
  """
  df = load_data()
  games_list = df[df['release_date'].dt.year  == int(year)].to_dict(orient='records')
  return games_list

##############

def get_specs_dict(year):
  """
  Top 5 juegos según año con mayor metascore.
  """
  df = load_data()
  specs_dict = {}

  df = df[df['release_date'].dt.year == int(year)]
  df['specs'].map(lambda x: count_items(specs_dict, x))

  return sort_dict(specs_dict)


##############

def get_genres_dict(year):
  """
  Top 5 juegos según año con mayor metascore.
  """
  df = load_data()
  genres_dict = {}

  df = df[df['release_date'].dt.year == int(year)]
  df['genres'].map(lambda x: count_items(genres_dict, x))

  return sort_dict(genres_dict)


##############

def get_early_access(year):
  """
  Top 5 juegos según año con mayor metascore.
  """
  df = load_data()
  df = df[df['early_access'] == True]
  df = df[df['release_date'].dt.year == int(year)]
  game_list = df.to_dict(orient='records')
  return [df.shape[0], game_list]


##############

def get_metascore(year: int, limit=1000) -> list:
  """
  Top 5 juegos según año con mayor metascore.
  """
  df = load_data()
  df = df[df['release_date'].dt.year == int(year)].sort_values(by=['metascore'], ascending=False)
  top_games = df.head(limit)
  top_games_dict = top_games.to_dict(orient='records')
  return top_games_dict