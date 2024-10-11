import React, { Component } from "react";
import { NewsItem } from "./NewsItem";

export default class News extends Component {
  articles=[
    {
      "status": "ok",
      "totalResults": 3,
      "articles": [
        {
          "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
          },
          "title": "Pakistan vs England LIVE: first Test, day four, Multan Cricket Stadium – cricket score, radio commentary and text updates",
          "description": "Pakistan host England in the first Test at Multan Cricket Stadium – follow text & score updates plus radio commentary.",
          "url": "http://www.bbc.co.uk/sport/cricket/live/cnd0pp64ld3t",
          "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
          "publishedAt": "2024-10-10T06:07:17.0877619Z"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z"
        }
      ]
    }
    
  ]
  constructor(){
    super();
    console.log("hello");
    this.state={
      articles:this.state,
      loading:false
    }
    
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h2>Top headlines </h2>
          <div className="row">
            <div className="col-md-4">
              <NewsItem title="hello" description="world" imageUrl="https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png" />
            </div>
            <div className="col-md-4">
              <NewsItem title="hello" description="world" />
            </div>
            <div className="col-md-4">
              <NewsItem title="hello" description="world" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
