
<b>Part 1</b>
Create a template for your process blog. I started out pretty vauge with more information to include in my process blog, but after watching the dynamoDB documentation I decided to simplify some areas and expand others.
![image](https://user-images.githubusercontent.com/86888346/137550362-6cbe6e7d-170c-449e-9ddb-42d4ac60f1ab.png)

Before moving forward with this process, I updated the table in for my process blog. I changed pk to 'bread type' and sk to 'totalTimeHours'. I also added additional entries so that I had 8 total. 
![image](https://user-images.githubusercontent.com/86888346/137593288-6f8d409c-0b1b-4f2e-8fbb-245460b41057.png)

Then, I used the starter code here. I queried for wheat bread that took between 7 and 16 hours.
![image](https://user-images.githubusercontent.com/86888346/137593213-561e8166-84aa-42af-ac0d-c5248474ce98.png)

Here is my query, shown in the console: 
![image](https://user-images.githubusercontent.com/86888346/137593365-60ab1e9b-704e-4e81-92fa-51397aa85bf0.png)

<b>Part 2</b>
Using the starter code, create a template to insert the information of your process blog. Once the template is created with string, boolean, or number values, you can push the information into the object created. (blogEntries) For now, we are just console logging to confirm the information is there and correct.
![image](https://user-images.githubusercontent.com/86888346/137550578-5e9ae7f0-3724-44f2-b6da-c471095c7e29.png)

<b>Part 3</b>
Lastly, we needed to connect the 2 servers using IAM. Once they are communicating - we can push the data to populate our SQL table. A loop is created using the 'async' function so that we can push all of the blog entries at once.
![image](https://user-images.githubusercontent.com/86888346/137550850-08a8e19a-3513-4c24-8e68-85cac5c3e6af.png)

<b>Part 4</b>
Now, if we check dynamoBD on aws we can see our process blog table has been populated. 
![image](https://user-images.githubusercontent.com/86888346/137551095-aeebb95f-861f-4061-bb68-729df7b7189a.png)

<b>Final Result:</b>
Using the starter code, I modified the template to reflect the data in my bread blog. Below is a sample of that code:
![image](https://user-images.githubusercontent.com/86888346/146866944-94ed59d3-2a45-41c4-b690-2e04948ba3ae.png)

Here is the landing page for my bread journal: <br>
![image](https://user-images.githubusercontent.com/86888346/146866237-439feedb-5e99-4b0b-b242-13f7d6421263.png)
Here is the bread when the type query is changed to 'wheat' in the address bar: <br>
![image](https://user-images.githubusercontent.com/86888346/146866287-3950f7c9-63f8-4ec1-a370-22626c566afa.png)
