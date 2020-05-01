Rescue Finder - Frontend

This web app's frontend was created with React and two seperate backends in Node.js/Express & Ruby on Rails.

It relates some information regarding the devestation that took place from the Australian Bush Fires and directs you to conservations and rescues doing good. Also includes some data visualization made possible with Carto and a dataset found and imported from Kaggle. Finally there is contact form that allows you to get in touch if desired. 


![](src/Rescue.gif)

---

## How the app works  

* To run the app, first fork and clone down this repo to your local device. 
* Note you will also need to clone down the backend repos at 
   * https://github.com/miwhag/wildlife_backend_node
   * https://github.com/miwhag/wildlife_backend_ruby
        
* Once you have both backend servers running, you can go into the frontend repo you cloned down, and in another terminal tab type `npm install` and then `npm start`. This will prompt the application to start. 


* From there you can navigate through the website seen in the video above 

   * Koala icon will bring you to the homepage 
   
   * Bushfire Map will show you all of the fires reported in Australia from 2019-08-01 to 2020-01-11. They are about two months behind on data, but more information on the dataset can be viewed here: https://www.kaggle.com/carlosparadis/fires-from-space-australia-and-new-zeland. 
   
   * Rescues will give a list of rescue and conservations in the area supporting the efforts to rehabilitate the animals that were effected. Click on a image and you can see more about that specific rescue.  
   
   * Finally the Contact page will allow you to send an email. This functionality was created with the Sendgrid Mail API and executed with an Express backend. 


### Technologies 
* Create React App 
* Javascript / HTML / CSS
* Sendgrid Mail
* Ruby on Rails 
* Node.js / Express
* Carto 
* Kaggle Dataset 

### Packages 
```
* react-countup
* react-reveal
* react-visibility-sensor 
* react-router-dom
* react-scripts
* axios 
```

### Next goals
* Get the project in mobile version

### Authors

* Miwha Geschwind - [Github Repo](https://github.com/miwhag)
