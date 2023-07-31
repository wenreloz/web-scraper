const express = require("express");
const cors = require("cors");
const app = express();
const searchScraper = require("./helpers/SearchScraper");

// Enable CORS
app.use(cors());

// Add middleware and configuration here

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello, World!");
});




// app.get("/search", async (req, res) => {
//     const { query } = req.query;

//     try {
//         const links = await searchScraper.search("intitle:index.of?.mp4 john wick");

//         let movieLinks = [];

//         links.forEach(async (link) => {
//             await searchScraper
//                 .getMovies(link)
//                 .then((movielinks) => {
//                     console.log(movielinks);
//                     movieLinks.push(movielinks);
//                 })
//                 .catch((error) => {
//                     console.error("Error:", error);
//                 });
//         });

//         res.json({ movieLinks });
//     } catch (error) {
//         console.error("An error occurred:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });






app.get("/movies", async (req, res) => {
    const { title } = req.query;

    try {
        const searchResults = await searchScraper.search(`intitle:index.of (mp4|avi|mkv|mov|flv|wmv) ${title}`);


        let parentLinks = [];
        (searchResults.links).forEach((value,index) => {

            parentLinks.push({
                link:value,
                img:searchResults.images[index]
            })
          
        });


        // const parentLinks = searchResults.links;
        // const childImages = searchResults.images;
        
        res.json({ parentLinks });
        //   await searchScraper.getMovies(parentLinks)
        //   .then((links) => {
        //     let dorkLinks = [].concat(...links);
        //     res.json({ dorkLinks });
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});









app.get("/books", async (req, res) => {
    const { title } = req.query;

    try {
   
        const parentLinks = await searchScraper.search(`intext:"${title}" filetype:doc OR filetype:docx OR filetype:pdf`);
        res.json({ parentLinks });
        // await searchScraper.getMovies(parentLinks)
        // .then((links) => {
        //   let dorkLinks = [].concat(...links);
        //   res.json({ dorkLinks });
        // })
        // .catch((error) => {
        //   console.error('Error:', error);
        // });
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});





app.get("/images", async (req, res) => {
  const { title } = req.query;

  try {
      const parentLinks = await searchScraper.search(`intitle:index.of (jpg|jpeg|png|gif) ${title}`);
      res.json({ parentLinks });
      // await searchScraper.getMovies(parentLinks)
      // .then((links) => {
      //   let dorkLinks = [].concat(...links);
      //   res.json({ dorkLinks });
      // })
      // .catch((error) => {
      //   console.error('Error:', error);
      // });
  } catch (error) {
      console.error("An error occurred:", error);
      res.status(500).json({ error: "Internal server error" });
  }
});