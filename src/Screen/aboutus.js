import React, { Component } from "react";
import { getdataforabout } from "../method/aboutus";
import "../style/au1.css";
import HomeFooter from "../widget/home_footer";
import { Header } from "../widget/home_top";
import { EnquiryPopup } from "../widget/popups";
import { ErrorPage, LoadingPage } from "../widget/warning_page";

export default class AboutUs extends Component {
  constructor() {
    super();
    this.state = {
      item: 0,
      loading: true,
      error: null,
      locations_h: [],
      locations_b: [],
      location: {},
      enquiryPopup: null,
    };
  }

  burl = "https://www.kalyanimotors.com/uploads/";

  titles = [
    {
      route: "aboutkalyani",
      title: "ABOUT KALYANI",
      component: <AboutAbout />,
      image: this.burl + "about_us/full/0efc0e0701c452cca2a39fa8a03c42b0.jpg",
    },
    {
      route: "whykalyani",
      title: "WHY KALYANI MOTORS",
      component: <AboutWhy />,
      image: this.burl + "staticpage/full/a3a3cb4ff87ea7955d00eb130d53395d.jpg",
    },
    {
      route: "qualitypolicy",
      title: "QUALITY POLICY",
      component: <AboutPolicy />,
      image: this.burl + "staticpage/full/9ace68837de363e4e55b5d8c31cffbdc.jpg",
    },
    {
      route: "awards",
      title: "AWARDS AND ACHIEVENENTS",
      component: <AboutAwards />,
      image: this.burl + "staticpage/full/ca911d0124c1b2d94c3e2921b91aba41.jpg",
    },
    {
      route: "drivingschool",
      title: "MARUTI DRIVING SCHOOL",
      component: <AboutSchool />,
      image: this.burl + "staticpage/full/ca911d0124c1b2d94c3e2921b91aba41.jpg",
    },
    {
      route: "careers",
      title: "CAREERS",
      component: <AboutCareer />,
      image: this.burl + "staticpage/full/02fddd70ad561e9a762182a84d5df3b9.jpg",
    },
  ];

  componentDidMount() {
    getdataforabout(this);
    const path = window.location.pathname.split("/")[2] ?? "";
    for (let i = 0; i < this.titles.length; i++) {
      const element = this.titles[i];
      if (element.route === path) this.setState({ item: i });
    }
  }

  render() {
    const { loading, error, item } = this.state;
    if (loading) return <LoadingPage />;
    if (error != null) return <ErrorPage />;
    return (
      <React.StrictMode>
        <Header props={this} />
        <img className="au1_a" src={this.titles[item].image} />
        <div className="au1_b">
          {this.titles.map((hd, k) => (
            <div
              onClick={() => {
                this.setState({ item: k });
                window.history.replaceState(null, null, hd.route);
              }}
              className="au1_c"
              style={item === k ? { color: "yellow" } : {}}
              key={k}
            >
              {hd.title}
            </div>
          ))}
        </div>
        {this.titles[item].component}
        <HomeFooter props={this} />
        <EnquiryPopup props={this} />
      </React.StrictMode>
    );
  }
}

function AboutAbout() {
  return (
    <div className="au1_a_a">
      <div className="au1_a_b">
        <div className="au1_a_c">ABOUT KALYANI</div>
        <div className="au1_a_d" />
        <div className="au1_a_e">
          Kalyani Motors, established by an insightful personage Late Sri S
          Anantha Raju, began its Maruti Suzuki dealership in Bengaluru in 2006,
          as an authorised Sales and Service Dealer. Kalyani Motors believes in
          customer satisfaction and constantly aims to enhance its quality
          standards to achieve perfection.
          <br />
          <br /> In taking forward the legacy, our Managing Director, Mr A Mohan
          Raju, has played a key role in the aggressive growth of Kalyani Motors
          with his father's guidance. Ablest with exceptional entrepreneurial
          capabilities, he put the initiated processes and methodologies into
          action for rendering impeccable quality services and establishing
          lasting customer relationships. Having many firsts and achievements to
          his credit, he was honoured with the prestigious “Business Person of
          the Year” title in the Zee Business Dare to Dream awards - 2018.
          <br />
          <br /> Our showrooms are located in a convenient location with the
          state-of-the-art equipment and are designed to offer a world class
          ambience to the customers. Keeping the key focus on quality and
          customer delight, we are one of the fastest growing Maruti Suzuki
          Dealers in South India.
          <br />
          <br /> The Service Centres are enabled with skilled personnel, who can
          efficiently attend the repairs for the entire range of Maruti Suzuki
          cars sold in Bengaluru. Also, they are well equipped to provide
          excellent after sales service with facilities like pickup and drop
          including a 24-hour Helpline service.
          <br />
          <br /> The success of the Kalyani Motors would not have been possible
          without the support of our valuable customers. We take this
          opportunity to thank all our customers for showering us with their
          graceful support. We commit ourselves to grab every opportunity to
          contribute excellence and customer happiness.
        </div>
      </div>
    </div>
  );
}

function AboutWhy() {
  return (
    <div className="au1_b_a">
      <div className="au1_b_b">
        <div className="au1_b_c">WHY KALYANI MOTORS</div>
        <div className="au1_b_d" />
        <div className="au1_b_e">
          Embracing the provisions of dynamic markets, Kalyani Group of
          companies has forged ahead unremittingly since the year 2006. The
          group ventured into the automobile industry with the setting up of
          Kalyani Motors, in Bengaluru initially, and has been hitherto
          recognised for its excellence and notable achievements.
          <br />
          <br /> With a fruitful and successful relationship with Maruti Suzuki,
          Kalyani Motors revolutionised the automobile industry in India,
          gathering many accolades for its expansion in various cities like
          Ramanagar, Channapatna, Kanakapura & now Hyderabad.
          <br />
          <br /> As a "Platinum Dealer" for six consecutive years, Kalyani
          Motors is the authorised sales & service dealer for Maruti Suzuki
          range of automobiles in Bangalore, with the estimates for the current
          year turnover standing at over Rs. 13.5 Billion. Kalyani Motors has
          many firsts and achievements to its credit. The aggressive growth of
          the company owes to steadfast processes and methodologies for
          rendering impeccable quality services and establishing lasting
          customer relationships.
          <br />
          <br /> Kalyani Motors has a team of over 3467 employees, with nearly
          400 sales personnel and 450 technical force, and has sold more than
          95,000 cars within a short span of 10 years. Carrying on the legacy
          and aspiring higher, Kalyani Motors has now grown big and has
          successfully created a strong presence in Bengaluru with the 9
          State-of-the-art showrooms, 10 Service Centres, 5 True Value outlets,
          10 Bodyshops, 2 Maruti Driving Schools and recently entered into the
          premium segment through Nexa outlets in JPNagar & RRNagar-Mysore Rd;
          and in Hyderabad, with the 1 state-of-the-art showroom, 2 Service
          Centres, 2 Bodyshops, 1 True Value outlet and India’s largest 200th
          Nexa outlet in Nagole, Hyderabad. Also, the future holds 3 more
          outlets in Bangalore and 5 more at Hyderabad.
          <br />
          <br /> The collective, dedicated and consorted efforts of ‘Team
          Kalyani’ have been instrumental in Kalyani Motors winning accolades
          and establishing a strong and satisfied customer base. The
          state-of-art service centre fulfils our penchant for delivering the
          best to our customers. Our ever-friendly and ever-helpful sales
          personnel are known for their alacrity and ensure that every visit to
          Kalyani Motors is pleasant and memorable.
        </div>
      </div>
    </div>
  );
}

function AboutPolicy() {
  return (
    <div className="au1_c_a">
      <div className="au1_c_b">
        <div className="au1_c_c">QUALITY POLICY</div>
        <div className="au1_c_d" />
        <div className="au1_c_e">
          Quality has been of paramount importance to us. We deal with only
          genuine components to ensure highest standards in quality and
          reliability. Our quality policy has been designed in tune with
          customer requirements. Our quality strategy is to maintain the
          reputation of the company by constantly meeting and exceeding customer
          expectations on every occasion. We ensure that all quality
          specifications are agreed to and clarified by both customers and
          suppliers before proceeding further with the procurement process and
          ensure delivery of defect free quality products always on time.
          <br /> We always commit ourselves for every order equally to ensure
          total product quality and reduce variation. We strive hard to
          constantly improve our quality, cost, delivery and service levels
          towards obtaining customer satisfaction.
        </div>
      </div>
    </div>
  );
}

function AboutAwards() {
  return (
    <div className="au1_c_a">
      <div className="au1_c_b">
        <div className="au1_c_c">AWARDS AND ACHIEVEMENTS</div>
        <div className="au1_c_d" />
        <div className="au1_c_e">
          Our longstanding reputation is sure to continue with strong growth in
          the future. We have received innumerable awards that speak for the
          innovations introduced by us and the various milestones achieved.
        </div>
      </div>
    </div>
  );
}

function AboutSchool() {
  return (
    <div className="au1_c_a">
      <div className="au1_c_b">
        <div className="au1_c_c">MARUTI DRIVING SCHOOL</div>
        <div className="au1_c_d" />
        <div className="au1_c_e">
          Maruti Driving School was established on 30th Nov 2011 with the goal
          to provide the best motor-driving training. The purpose is to impart
          not just better driving skills but also better awareness towards
          overall road safety. MDS provides immense opportunities to learn
          driving & develop confidence. It is definitely the right way to move
          towards a safer future.
        </div>
      </div>
    </div>
  );
}

function AboutCareer() {
  return (
    <div className="au1_c_a">
      <div className="au1_c_b">
        <div className="au1_c_c">CAREERS</div>
        <div className="au1_c_d" />
        <div className="au1_c_e">
          The best people produce the best product. That's why Kalyani Motors is
          constantly on the lookout for bright, ambitious team players who have
          a strong commitment to drive the company forward. We invite you to
          follow your own dream & explore the career opportunities with Kalyani
          Motors.
          <br />
          <br />  
          <br />
          Please forward your CV to recruiter1@kalyanimotors.com /
          recruiter6@kalyanimotors.com or Call Mr. Dillip on 9845094499 /
          9900599910
        </div>
      </div>
    </div>
  );
}
