from flask import Flask
app = Flask(__name__)

@app.route('/test')
def print_backend():
    return {
        'title': 'proper'
    }
