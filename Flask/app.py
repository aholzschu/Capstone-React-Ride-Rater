from flask import Flask, request, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import os 

class Config():
    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = os.environ.get('SQLALCHEMY_TRACK_MODIFICATIONS')

app = Flask(__name__)
cors = CORS(app)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db, compare_type=True)

@app.route('/')
def index():
        return 'Hello World'

class User(db.Model):
    __tablename__ = 'user'

    user_id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    reviews = db.relationship('Review', backref = 'owner', lazy='dynamic')

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def from_dict(self, data):
        self.first_name = data['first_name']
        self.last_name = data['last_name']

    def to_dict(self):
        return {'user_id': self.user_id, 'first_name': self.first_name, 'last_name': self.last_name}


class Review(db.Model):
    __tablename__ = 'review'

    reviewer_id = db.Column(db.Integer, primary_key=True)
    attraction_name = db.Column(db.String)
    rating = db.Column(db.Integer)
    user_review = db.Column(db.String)
    name = db.Column(db.String)
    owner_id = db.Column(db.ForeignKey('user.user_id'))

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def from_dict(self, data):
        self.attraction_name = data['attraction_name']
        self.rating = data['rating']
        self.user_review = data['user_review']
        self.name = data['name']
        self.owner_id = data['owner_id']
    
    def to_dict(self):
        return {'attraction_name': self.attraction_name, 'rating': self.rating, 'user_review': self.user_review, 'reviewer_id': self.reviewer_id, 'name': self.name,  'owner_id': self.owner_id}


@app.post('/user')
def create_user():
    data = request.get_json()
    new_user = User()
    new_user.from_dict(data)
    new_user.save()
    return make_response('User Created', 200)

@app.delete('/user/<int:id>')
def delete_user(id):
    del_user = User.query.get(id)
    del_user.delete()
    return make_response('User Destroyed')

@app.get('/user')
def get_all_users():
    users=User.query.all()
    users = [user.to_dict() for user in users]
    return make_response({'Users': users}, 200)

@app.post('/review')
def create_review():
    data = request.get_json()
    new_res = Review()
    new_res.from_dict(data)
    new_res.save()
    return make_response('Review Created',200)

@app.delete('/review/<int:id>')
def delete_review(id):
    del_user = Review.query.get(id)
    del_user.delete()
    return make_response('User Destroyed')


@app.get('/review')
def get_all_reviews():
    reviews = Review.query.all()
    reviews = [review.to_dict() for review in reviews]
    return make_response({'Reviews': reviews}, 200)


@app.get('/user/review/<int:id>')
def get_user_reviews(id):
    these_reviews = Review.query.filter_by(owner_id=id).all()
    these_reviews = [review.to_dict() for review in these_reviews]
    return make_response({'User_Reviews': these_reviews}, 200)