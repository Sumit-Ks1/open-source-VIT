import React from 'react';
import team from './teammembers.module.css';

import Member from './Member.jsx';
// const Member = React.lazy(() => import('./Member.jsx'));
import { IoPersonSharp } from "react-icons/io5";
// commented part of the code , I have tried to replace loading with lazy loading.
export default function TeamMembers() {
    return (
        <div className={team.mainteamcontainer}>
            <h1 style={{
                color: "blue",
                textDecoration: "underline",
                boxShadow: "0px 0px 19px white",
                textDecorationThickness: "2px",
                fontSize: "40px",
                padding: "10px",
                borderRadius: "16px"
            }}>
                Meet our Cohort
            </h1>
            {/* <Suspense fallback={
                <div style={{
                    color: 'snow',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} className={team.teamcontainer}>
                    <div className={team.lazyloading}><h2>Loading...</h2></div>
                    <div className={team.lazyloading}><h2>Loading...</h2></div>
                    <div className={team.lazyloading}><h2>Loading...</h2></div>
                    <div className={team.lazyloading}><h2>Loading...</h2></div>
                    <div className={team.lazyloading}><h2>Loading...</h2></div>
                    <div className={team.lazyloading}><h2>Loading...</h2></div>
                    <div className={team.lazyloading}><h2>Loading...</h2></div>
                    <div className={team.lazyloading}><h2>Loading...</h2></div>
                    <div className={team.lazyloading}><h2>Loading...</h2></div>
                </div>
            }> */}
            
            <div className={team.teamcontainer}>
                <Member profile={<IoPersonSharp size="4em" />} name="Harsh Shukla" position="Co-Founder" />
                <Member profile={<IoPersonSharp size="4em" />} name="Jaiditya Batra" position="Web development Core Team Member" />
                <Member profile={<IoPersonSharp size="4em" />} name="Abhinay S. Bhadauria" position="Web development Core Team Member" />
                <Member profile={<IoPersonSharp size="4em" />} name="Aditya Khamitkar" position=" Machine learning Engineer" />
                <Member profile={<IoPersonSharp size="4em" />} name="Nimish Selot" position="Design Team Lead" />
                <Member profile={<IoPersonSharp size="4em" />} name="Neha kohli" position="Social Media Team Lead" />
                <Member profile={<IoPersonSharp size="4em" />} name="Rishi Kaul" position="Photography Lead" />
                <Member profile={<IoPersonSharp size="4em" />} name="Manan Patel" position="Finance Team Lead" />
                <Member profile={<IoPersonSharp size="4em" />} name="Dev Bansal" position="Finance Team" />

            </div>
            {/* </Suspense> */}

        </div>
    )
}


