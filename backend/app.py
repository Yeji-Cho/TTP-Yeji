from flask import Flask, render_template, request, redirect, url_for, jsonify

app = Flask(__name__, template_folder='templates')

checklist = [
    {"task": "Sample Task", "done": False, "url": None},  # Normal checklist item
    {"task": "Gender Identity Dictionary", "done": False, "url": "https://www.medicalnewstoday.com/articles/types-of-gender-identity#history"},
    {"task": "Article: Are You Aware of Your Biases?", "done": False, "url": "https://hbr.org/2022/02/are-you-aware-of-your-biases"},
    {"task": "5 Tips for Managing Unconscious Bias at Work", "done": False, "url": "https://www.cornerstoneondemand.com/resources/article/5-tips-managing-unconscious-bias-work/"}
]

@app.route('/')
def index():
    return render_template("index.html", checklist=checklist)

@app.route('/add', methods=['POST'])
def add():
    todo = request.form['todo']
    checklist.append({"task": todo, "done": False})
    return redirect(url_for('index'))


@app.route("/edit/<int:index>", methods=['GET', 'POST'])
def edit(index):
    todo = checklist[index]
    if request.method == 'POST':
        todo['task'] = request.form['todo']
        return redirect(url_for('index'))
    else:
        return render_template('edit.html', todo=todo, index=index)


@app.route("/check/<int:index>")
def check(index):
    checklist[index]['done'] = not checklist[index]['done']
    return redirect(url_for('index'))


@app.route("/delete/<int:index>")
def delete(index):
    del checklist[index]
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)