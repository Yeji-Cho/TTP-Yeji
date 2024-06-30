import json
from flask import Flask, request, Response

app = Flask(__name__, template_folder='templates')

checklist = [
    # {"task": "Sample Task", "done": False, "url": None},  # Normal checklist item
    {"task": "Gender Identity Dictionary", "done": False, "url": "https://www.medicalnewstoday.com/articles/types-of-gender-identity#history"},
    {"task": "Article: Are You Aware of Your Biases?", "done": False, "url": "https://hbr.org/2022/02/are-you-aware-of-your-biases"},
    {"task": "5 Tips for Managing Unconscious Bias at Work", "done": False, "url": "https://www.cornerstoneondemand.com/resources/article/5-tips-managing-unconscious-bias-work/"}
]

@app.route('/api/checklist')
def get_checklist():
    return Response(json.dumps(checklist),  mimetype='application/json')

@app.route('/api/add', methods=['POST'])
def add():
    todo = request.json['todo'] # Get data from frontend 
    checklist.append(todo)
    return Response("{}", status=200, mimetype='application/json')

@app.route("/api/edit/<int:index>", methods=['POST'])
def edit(index):
    todo = checklist[index]
    todo['task'] = request.json['task']
    return Response("{}", status=200, mimetype='application/json')


@app.route("/api/check/<int:index>")
def check(index):
    checklist[index]['done'] = not checklist[index]['done']
    return Response("{}", status=200, mimetype='application/json')


@app.route("/api/delete/<int:index>", methods=['DELETE'])
def delete(index):
    del checklist[index]
    return Response("{}", status=200, mimetype='application/json')


if __name__ == '__main__':
    app.run(debug=True)