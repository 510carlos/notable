"""
BE for Notable
"""
from flask import (
    Flask,
    request,
)
import json

app = Flask(__name__)

def getAptsById(id):
    try:
        apts = [
            [
                {
                    "key": '1',
                    "name": '1 Sterling Archer',
                    "time": "8:00AM",
                    "kind": 'New Patient',
                },
                {
                    "key": '2',
                    "name": 'Cyril Figis',
                    "time": "8:30AM",
                    "kind": 'Follow Up',
                },
                {
                    "key": '3',
                    "name": 'Ray Gillete',
                    "time": "9:00AM",
                    "kind": 'Follow Up',
                },
                {
                    "key": '4',
                    "name": 'Lana Kane',
                    "time": "9:30AM",
                    "kind": 'New Patient',
                },
                {
                    "key": '5',
                    "name": 'Pam Poovey',
                    "time": "10:00AM",
                    "kind": 'New Patient',
                }
            ],
            [
                {
                    "key": '1',
                    "name": '2 Sterling Archer',
                    "time": "8:00AM",
                    "kind": 'New Patient',
                },
                {
                    "key": '2',
                    "name": 'Cyril Figis',
                    "time": "8:30AM",
                    "kind": 'Follow Up',
                },
                {
                    "key": '3',
                    "name": 'Ray Gillete',
                    "time": "9:00AM",
                    "kind": 'Follow Up',
                },
                {
                    "key": '4',
                    "name": 'Lana Kane',
                    "time": "9:30AM",
                    "kind": 'New Patient',
                },
                {
                    "key": '5',
                    "name": 'Pam Poovey',
                    "time": "10:00AM",
                    "kind": 'New Patient',
                }
            ],
            [
                {
                    "key": '1',
                    "name": '3 Sterling Archer',
                    "time": "8:00AM",
                    "kind": 'New Patient',
                },
                {
                    "key": '2',
                    "name": 'Cyril Figis',
                    "time": "8:30AM",
                    "kind": 'Follow Up',
                },
                {
                    "key": '3',
                    "name": 'Ray Gillete',
                    "time": "9:00AM",
                    "kind": 'Follow Up',
                },
                {
                    "key": '4',
                    "name": 'Lana Kane',
                    "time": "9:30AM",
                    "kind": 'New Patient',
                },
                {
                    "key": '5',
                    "name": 'Pam Poovey',
                    "time": "10:00AM",
                    "kind": 'New Patient',
                }
            ],
        ]
        return apts[id]
    except Exception as e:
        return []

@app.route('/api/doctors', methods=['GET'])
def doctors():
    """ Return a list of Doctors"""
    doctors = [
        {
            "id": 1,
            "name": "Hibbert, Julius"
        },
        {
            "id": 2,
            "name": "Krieger, Algemap"
        },
        {
            "id": 3,
            "name": "Riviera, Nick"
        }
    ]
    return json.dumps(doctors)

@app.route('/api/apointments', methods=['GET'])
def apointments():
    """ Return a list of apts per doctor Doctors"""
    id = int(request.args.get("id"))
    return json.dumps(getAptsById(id))


if __name__ == '__main__':
    app.debug = True
    app.secret_key = "32523knjnj33454"
    app.run(host='0.0.0.0', port=8000)
