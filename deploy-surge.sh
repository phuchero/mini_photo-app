
#Build reactjs app with production mode
npm run build 


#move to folder
cd build

#clone index.html into 200.html
cp index.html 200.html

#start deploying via surge
#The command mean deploy current folder to domain ....
surge . phuc-photo-app.surge.sh

