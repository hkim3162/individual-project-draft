# individual-project
A personal website

GOALS:
  This website is going to be called Headshots with Han. The app will display a portfolio of my pictures. In the headers it will have the different categories of photography, (linking to a location in an infinite scroll of the homepage/index). 
    Headers include: [Portfolio, Landscape, Creative, Veterans,] Schedule, and an About Me


STEPS:

1) THE BACK-END
  - The back-end will be running rails. I will generate one table, that is supposed represent all the metadata/data with photos. 
  These include, the AWS S3 URL for the picture, a date, description.

  THE FRONT-END


-----CODING STEPS

1)> rails new websites --api -d postgresql -T --no-turbo-links
2 bundle exec railgs g model Photos
3) add variables to your migration file: url, description, date
4) bundle exec rails db:migrate or YOLO
5) bundle exec rails g controller v1/photos
6) go into controller. def index, render json
7, go to routes, name space and resources
8) create controller methods
9) seeded data
10) created more controller methods
11) made request with post app


ESTABLISH FRONT END

npm install -g create-react-app
 npm install react-router-dom --save
 npm install react-bootstrap --save
 npm install react-bootstrap-table --save
