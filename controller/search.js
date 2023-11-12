const { androidx_appcompat_app } = require("../data/searchData/android/androidx.appcompat.app");
const { androidx_appcompat_content_res } = require("../data/searchData/android/androidx.appcompat.content.res");
const { androidx_appcompat_graphics_drawable } = require("../data/searchData/android/androidx.appcompat.graphics.drawable");
const { search_tutorial } = require("../data/searchData/searchTutorial/search_tutorial");


const handleSearch = (req, res)=>{

    const perPage = 15; // number of results to show per page
  const { q, page = 1 } = req.query; // get the search query and current page number from the request query params

    const data = {
       searchTutorial: search_tutorial,
       
        android:[
        androidx_appcompat_app,
        androidx_appcompat_content_res,
        androidx_appcompat_graphics_drawable
    ]
}

   
const filteredHtmlResults = data.searchTutorial.filter((result) => {
    return result.title.toLowerCase().includes(q.toLowerCase()) || result.title.split(" ").some(spData => spData.toLowerCase().includes(q.toLowerCase()));
  }); 
  
  // filter the search results based on the search query
  const filteredResults = data.android.filter((result) =>
  result.title.toLowerCase().includes(q.toLowerCase())
);
const filteredResult = data.android.flatMap((result) =>
result.suggestion.filter((suggestion) =>
  suggestion.title.toLowerCase().includes(q.toLowerCase())
)
);
const filteredRes = data.android.flatMap((result) =>
result.suggestion.flatMap((suggest) => 
     suggest.suggestion.filter((suggestion) =>
     suggestion.title.toLowerCase().includes(q.toLowerCase())
    )
)
);
const combinedArray = [...filteredHtmlResults,...filteredResults, ...filteredResult, ...filteredRes];

const arrayOfObjects = combinedArray.map((obj) => obj);

// console.log(arrayOfObjects);

// console.log(filteredResults);
// calculate the total number of pages based on the number of filtered results and results per page
const totalPages = Math.ceil(arrayOfObjects.length / perPage);

// slice the filtered results to get the results for the current page
const currentPageResults = arrayOfObjects.slice(
  (page - 1) * perPage,
  page * perPage
);


// construct the response object containing the current page results and pagination information
const response = {
  results: currentPageResults,
  currentPage: parseInt(page),
  totalPages: totalPages,
};
res.json({response});
}

module.exports = handleSearch;