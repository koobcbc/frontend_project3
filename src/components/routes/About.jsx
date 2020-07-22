import React from 'react';
import Layout from '../shared/Layout'

const About = props => {
    return(
        <Layout>
            <div className="about-page">
            <div className="about">
            <h3>About</h3>
            <p>Due to covid, many ice cream parlors are not allowing customers in their store. 
                However we have created an online app where customers can place an order for 
                pickup allowing them to enjoy a delicious treat of their choice. We can bring 
                your your morning, mid-day or late night cravings to life. If you have already 
                placed an order you can check your past order by looking for your name and your order will be displayed.
            </p>
            </div>
            <div className="menu">
                <h4>Menu</h4>
                <h5>Flavors</h5>
                <p>Chocolate, Vanilla, Strawberry, Cookies N Cream, Mint Chocolate Chip,
                     Pistachio, Birthday Cake and Buttered Pecan</p>
                <h5>Toppings</h5>
                <p>Oreos, Sprinkles, Gummy Bears, Peanuts, Peanut Butter Cups, Hot Fudge, Chocolate Sauce and Pecans</p>
                <h5>Holder</h5>
                <p>Cup, Bowl, Cone and Waffle Cone</p>
                <h5>Size</h5>
                <p>Small, Medium and Large</p>
            </div>
            <div className="team">
                <h3>Team</h3>
                <div className="team-member">
                    <img className="profile" src="https://otterathletics.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2016/10/7//Covarrubias_2017_Mug.jpg"/>
                    <div className="bio">
                        <h5>Joe Covarrubias</h5>
                        <p>My contribution was mostly on the backend helping create an api that made it easier for the frontend to work with. Making changes as needed throughout our project. Deploying it to Heroku where the information can be easily used and manipulated. My passions include music, sports, and every other platform I can use my creativity to help make a positive change because we can all use a little positivity in our life.</p>
                    </div>
                </div>
                <div className="team-member">
                    <div className="imgcontainer"><img className="profile" src="https://i.imgur.com/MXPp02j.png"/></div>
                    <div className="bio">
                        <h5>Alexander Brown </h5>
                        <p>My main contribution was on the backend by helping create most of the models and seed data. I assisted my teammates by making needed updates on the backend throughout our project. I also helped with the front end menu on the “About” page. My passions are music, any sport that requires a board, and building objects whether they be music, cars, motorcycles, computers or web applications.</p>
                    </div>
                </div>
                <div className="team-member">
                    <img className="profile" src="https://i.imgur.com/hcyfcCt.jpg"/>
                    <div className="bio">
                        <h5>Beechui (Katy) Koo</h5>
                        <p>My contribution to this project includes creating the wireframes of the app, building out the past orders tab including the functionality of deleting and updating individual orders. I also contributed to the styling of the page and the responsiveness. My passion lies in science and technology, and I like catching up the news for our fast-paced developments in the world. Besides my scientific interest, I enjoy swimming, biking, and playing sports including basketball and badminton.</p>
                    </div>
                </div>
                <div className="team-member">
                    <img className="profile" src="https://imgur.com/hVfQyxM.jpg" />
                    <div className="bio">
                        <h5>David Swanberg</h5>
                        <p>My contribution to this project included planning and building out the React components, specifically,functionality for the order forms. I also helped with some styling, and responsiveness, as well as general UI and debugging. I'm passionate about design and technology.. When I'm not coding I'm playin my guitar, listening to music, or hanging out with friends</p>
                    </div>
                </div>
            </div>
            </div>
        </Layout>
  )}
  
  export default About;