First I used the week03.js file to call the addresses_m01.json from Week-02 and parsed it. The dependencies were already set at the top of the document.

Then, I used eachSeries in the async module to iterate over an array and operates on each item in the array in series

After that, I constructed a querystring from the `query` object's values and appended it to the api URL

From there, I used fs.writeFileSync to create a new file that held all of the json data with the geocode information

After I made the new JSON file with the geocode information, I used a JSON 'beautifier' app on the internet to clean it up and make a new file called 'prettyAddress.json'

I created a JS file called 'prettyAddress.js' to work off of, and I transfered the geocode data to this file so I could continuously refer to it while working. (I probably could have just called from the json file, but found it easier to just copy and paste in this instance)

Lastly, in the prettyAddress.js file, I created a for loop to iterate through all of the addresses and created a new variable where I selected only the data that I needed from this large json document. (Street address, latitude, and longitude)
After pushing these new objects, I wrote a new file using 'writeFileSync' called AddressLatLong.json, where all of my final data is stored.