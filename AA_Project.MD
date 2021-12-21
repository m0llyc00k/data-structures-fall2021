<h1>AA Meeting Final Review</h1>
<h2>Molly Cook</h2>

The goal of this project was to scrape all AA data from the below existing site and rework the site into a more comprehensible, user-friendly site.<br>
![image](https://user-images.githubusercontent.com/86888346/146854688-01ed8b7a-9497-4f47-8108-40328a0f8b17.png)

I began this journey by scraping the addresses from the existing AA website link through the following code: <br>
![image](https://user-images.githubusercontent.com/86888346/146854533-c488ff66-5e6e-4409-ada1-9631f872380b.png)

After getting the addresses, I pulled the geocodes using the following code in order to utilize the longitude and latitude in the final result. The below is the data that was pulled: <br>

![image](https://user-images.githubusercontent.com/86888346/146855405-5ffe59d6-bd6c-44b3-9749-45e4126341ef.png)

Although I had the latitude and longitude, I had to scrape the remaining data from the sites, and so I pulled the following data:
![image](https://user-images.githubusercontent.com/86888346/146855693-9d834b1b-46ee-4314-bf85-5679f65d2e08.png)

In order to write this code to my database, I had to reformat the structure so that each address and meeting were a single entry, so I divided the json further into the following json: <br>
![image](https://user-images.githubusercontent.com/86888346/146855805-35210459-8ec6-4acd-84ff-0a4d67893e33.png)
