import { useContext} from "react";
import { Link,useParams } from "react-router-dom";

function AccountPage(){
    // const {user}=useContext(UserContext);
    //missing code for UserContext.jsx will be added after login page till then stay tuned

    let {subpage}=useParams();

    if(subpage===undefined){
        subpage="profile";
    }

    function linkClasses(type=null){
        let classes='py-2 px-6';
        if((type===subpage)){
            classes+=' bg-primary text-white rounded-full';
        }
        return  classes;
    }

    return(
        <div>
            <nav className="w-full flex justify-center mt-8 gap-4 mb-8">
            <Link className={linkClasses("profile")} to={"/account"}>My Profile</Link>
            <Link className={linkClasses("bookings")} to={"/account/bookings"}>My Booking</Link>
            <Link className={linkClasses("places")} to={"/account/places"}>My Accomodation </Link>
            <Link className={linkClasses("wishlist")} to={"/account/wishlist"}>My Wishlist</Link>
        </nav>

        {subpage==='profile' && (
            <div className="text-center max-w-lg mx-auto">
                Login as user <br />
                <button className="bg-primary max-w-sm mt-2 rounded-full px-20 py-1">
                    Logout
                </button>
            </div>
        )}
        </div>
        
    );
}

export default AccountPage;