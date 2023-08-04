from flask import Flask, jsonify, request
from flask_cors import CORS
import server.utils.controllers as ctrl
from ast import literal_eval
from dotenv import load_dotenv
import os

load_dotenv()


app = Flask(__name__, static_folder='../client/dist/',    static_url_path='/')
app.config.from_object(__name__)

CORS(app, resources={r'/*': {'origins': '*'}})

# Sigle Page Application
@app.route('/')
def index():
  return app.send_static_file('index.html')


# Videojuego por identificador
@app.route("/api/game/<id>", methods = ['GET'])
def game(id):
  
  if(request.method == 'GET'): 
    game = ctrl.get_game(id)
    return jsonify(game)


# Lista de Juegos por año
@app.route("/api/games_list/<year>", methods = ['GET'])
def games_list(year):
  
  games = ctrl.get_game_list(year)
  return jsonify(games)


# Lista de Juegos por año
@app.route("/api/genres/<year>", methods = ['GET'])
def games(year):
  
  if(request.method == 'GET'): 
    
    response = ctrl.get_genres_dict(year)
    return jsonify(response)


# Lista de Juegos por año
@app.route("/api/specs/<year>", methods = ['GET'])
def specs(year):
  
  if(request.method == 'GET'): 
  
    response = ctrl.get_specs_dict(year)
    return jsonify(response)


# Videojuegos con Acceso Anticipado por año
@app.route("/api/earlyacces/<year>", methods = ['GET'])
def earlyacces(year):
  
  games_amount, game_list = ctrl.get_early_access(year)
  
  response_body = {
    'games': game_list, 
    'result' : games_amount  
  }
  
  return jsonify(response_body)

 
# Sentimiento recibido durante el año
@app.route("/api/sentiment/<year>", methods = ['GET'])
def sentiment(year):
  
  if(request.method == 'GET'): 
    top_limit = request.args.get('limit') 
    response = ctrl.get_metascore(year, top_limit)  
  
  return jsonify(response)

# Lista de Top n videojuegos por metascore
@app.route("/api/metascore/<year>", methods = ['GET'])
def metascore(year):
  
  if(request.method == 'GET'): 
    top_limit = str(request.args.get('limit'))
    
    if top_limit.isnumeric():
      top_limit = int(top_limit)
      response = ctrl.get_metascore(year, top_limit)  
      return jsonify(response)
      
    try:
      if literal_eval(top_limit) is None:
        response = ctrl.get_metascore(year)  
        return jsonify(response)  
    except:
      return jsonify({
        'Error': 'The limit must be a Intenger Number'
      })


# Modelo de Regresión para la predicción de Precio
@app.route("/api/predict_price", methods = ['POST'])
def predict_price():
    
  username = request.args.get('username')
  password = request.args.get('password')
  username = request.args.get('username')
  password = request.args.get('password')
  username = request.args.get('username')
  password = request.args.get('password')
  
  response = {}
  
  return 'gotls'


if __name__=='__main__':
  port = int(os.environ.get("PORT", 8000))
  app.run(host='0.0.0.0', port=port)