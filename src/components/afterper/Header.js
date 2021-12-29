import "./header.css"

const Header = () => {
    return ( 
        <div className="heading-main">
            <div className="hello">
                <div className="helloname">It’s good to see you again.</div>
                <div className="helloname1">Hello Jane !</div>
            </div>
            <div className="black">
                <div className="dd">
                    <div className="document">Download Report </div>
                    <div className="download">Last week <svg stroke="rgba(113, 113, 122, 1)" fill="rgba(113, 113, 122, 1)" stroke-width="0" viewBox="0 0 512 300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg></div>
                </div>
                <div className="dicon">
                <div className="icondis"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"></path></g></svg></div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;