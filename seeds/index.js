const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities.js");
const { places, descriptors } = require("./seed-helpers");

main().catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/yelpCamp");
}

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const randomPrice = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "65df62e4ed02fa4efcbe9cab",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: "https://res.cloudinary.com/dn0rgwkgz/image/upload/v1709308868/YelpCamp/ymoza0tiw1u29rfng0na.jpg",
          fileName: "YelpCamp/ymoza0tiw1u29rfng0na",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, asperiores quo voluptatum molestiae velit blanditiis tempore similique sapiente quibusdam! Sed labore incidunt dolore commodi voluptatibus mollitia eius ipsum optio magnam!",
      price: randomPrice,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
