from flask import Flask, jsonify, request
from flask_cors import CORS
import api.utils.controllers as ctrl
from ast import literal_eval
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__, static_folder='./static/',    static_url_path='/')
app.config.from_object(__name__)

CORS(app, resources={r'/*': {'origins': '*'}})

# Frontend de la aplicacion
@app.route('/')
def index():
  return app.send_static_file('index.html')

# Videojuego por identificador de steam
@app.route("/api/game/<id>", methods = ['GET'])
def game(id:str):
  
  if(request.method == 'GET'): 

    if not id.isnumeric():
      return jsonify({
        'Error': 'The year must be a intenger number'
      })

    game = ctrl.get_game(id)
    return jsonify(game)

# Lista de Juegos por año
@app.route("/api/gamelist/<year>", methods = ['GET'])
def games_list(year:str):

  if(request.method == 'GET'):

    if not year.isnumeric():
      return jsonify({
        'Error': 'The year must be a intenger number'
      })

    games_limit = str(request.args.get('limit'))
    
    if games_limit.isnumeric():
      games_limit = int(games_limit)
      response = ctrl.get_game_list(year, games_limit)
      return jsonify({
        year: response
      })
      
    try:
      if literal_eval(games_limit) is None:
        response = ctrl.get_game_list(year)  
        return jsonify(response)  
    except:
      return jsonify({
        'Error': 'The "limit" must be a Intenger Number'
      })
    
    return jsonify(games)

# Lista de Juegos por año
@app.route("/api/genres/<year>", methods = ['GET'])
def games(year:str):
  
  if(request.method == 'GET'): 

    if not year.isnumeric():
      return jsonify({
        'Error': 'The year must be a intenger number'
      })

    response = ctrl.get_genres_dict(year)
    return jsonify(response)

# Lista de Juegos por año
@app.route("/api/specs/<year>", methods = ['GET'])
def specs(year:str):
  
  if(request.method == 'GET'): 

    if not year.isnumeric():
      return jsonify({
        'Error': 'The year must be a intenger number'
      })

    response = ctrl.get_specs_dict(year)
    return jsonify(response)

# Cantidad de Videojuegos con Acceso Anticipado por año
@app.route("/api/earlyaccess/<year>", methods = ['GET'])
def earlyacces_amount(year:str):
  
  if(request.method == 'GET'): 

    if not year.isnumeric():
      return jsonify({
        'Error': 'The year must be a intenger number'
      })

    games_amount, game_list = ctrl.get_early_access(year)
    response_body = {
      'amount' : games_amount,  
    }
  
  return jsonify(response_body)
 
# Sentimiento recibido durante el año
@app.route("/api/sentiment/<year>", methods = ['GET'])
def sentiment(year:str):
  
  if(request.method == 'GET'): 

    if not year.isnumeric():
      return jsonify({
        'Error': 'The year must be a intenger number'
      })

    response = ctrl.get_sentiment_dict(year)  
    return jsonify(response)

# Lista de Top n videojuegos por metascore
@app.route("/api/metascore/<year>", methods = ['GET'])
def metascore(year:str):
  
  if(request.method == 'GET'): 

    if not year.isnumeric():
      return jsonify({
        'Error': 'The year must be a intenger number'
      })

    top_limit = str(request.args.get('limit'))
    
    if top_limit.isnumeric():
      top_limit = int(top_limit)
      response = ctrl.get_metascore(year, top_limit)  
      return jsonify({
          year: response
        })
      
    try:
      if literal_eval(top_limit) is None:
        response = ctrl.get_metascore(year)  
        return jsonify({
          year:response
        })  
    except:
      return jsonify({
        'Error': 'The limit must be a Intenger Number'
      })

# Modelo de Regresión para la predicción de Precio
@app.route("/api/predict_price", methods = ['POST'])
def predict_price():
  
  default_params = {
    'release_date': 2010, 
    'number_of_tags':0,
    'number_of_specs':0, 
    'metascore':80, 
    'sentiment':5,
    'indie':0, 
    'casual':0, 
    'action':0,
    'sports':0,
    'racing':0,	
    'strategy':0,
    'rpg':0,
    'simulation':0
  }
  
  data_predict = [] 
  
           
  for param in list(default_params):
    
    request_data = request.get_json()
    data = request_data[param]

    if data != None:
      data_predict.append(int(data))
    else:
      data_predict.append(default_params[param])
    
  model = ctrl.load_model()
  result = model.predict([data_predict])
  
  return jsonify({
    'response': result[0]
  })

if __name__=='__main__':
  port = int(os.environ.get("PORT", 8000))
  app.run(host='0.0.0.0', port=port)