import "./dashboard.css"

const Dashboard = () => {
    return ( 
        <div className="maindash">
            <div className="maindash1">
                <div className="maindash2">
                <div className="show">Show: <span>Team</span>
                    <div className="iconclass"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg></div>
                </div>
                <div className="rect"></div>
                <div className="search"><input className="inputsearch" type="text" placeholder="Search team" />
                 <div className="searchicon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"></path></svg></div>
                </div>
                </div>
            </div>
            <div className="chart">
                <div className="left">
                    <div className="piechart">
                        <div className="head">
                            <div className="headc">Course</div>
                            <div className="total">Total course assigned</div>
                        </div>
                        <div className="pie">
                            <div className="pieequip">
                                <div className="orange"></div>
                                <div className="red"></div>
                                <div className="green"></div>
                                <div className="yellow"></div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="announcement">
                        <div className="title">Announcement</div>
                    </div>
                    <div className="demand">
                        <div className="write">Courses in demand</div>
                        <div className="demandc">
                            <div className="content">
                                <div className="iconbook"><svg stroke="black" fill="blue" stroke-width="1" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"></path></svg></div>
                                <div>
                                    <div className="headd">Introduction to hadoop</div>
                                    <div className="subhead">28 Employee</div>
                                </div>
                            </div>

                            <div className="content">
                                <div className="iconbook"><svg stroke="black" fill="blue" stroke-width="1" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"></path></svg></div>
                                <div>
                                    <div className="headd">Introduction to python</div>
                                    <div className="subhead">28 Employee</div>
                                </div>
                            </div>

                            <div className="content">
                                <div className="iconbook"><svg stroke="black" fill="blue" stroke-width="1" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"></path></svg></div>
                                <div>
                                    <div className="headd">Introduction to java</div>
                                    <div className="subhead">28 Employee</div>
                                </div>
                            </div>

                            <div className="content">
                                <div className="iconbook"><svg stroke="black" fill="blue" stroke-width="1" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"></path></svg></div>
                                <div>
                                    <div className="headd">Introduction to html</div>
                                    <div className="subhead">28 Employee</div>
                                </div>
                            </div>

                            <div className="content">
                                <div className="iconbook"><svg stroke="black" fill="blue" stroke-width="1" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"></path></svg></div>
                                <div>
                                    <div className="headd">Introduction to css</div>
                                    <div className="subhead">28 Employee</div>
                                </div>
                            </div>

                            <div className="content">
                                <div className="iconbook"><svg stroke="black" fill="blue" stroke-width="1" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"></path></svg></div>
                                <div>
                                    <div className="headd">Introduction to react</div>
                                    <div className="subhead">28 Employee</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="graphmat">
                        <div className="heartbeat">
                            <div className="HB1">
                                <div className="HBhead">Your statistics</div>
                                <div className="HBtext">Graph</div>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div className="smallheader1">
                                <div className="small1">Overview</div>
                                <div className="small2">Show: <span>monthly</span><svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 -100 500 500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg></div>
                            </div>
                            <div className="HB2">
                                <div className="Icon1">
                                    <div className="earth">
                                        <div className="icondiv"><svg stroke="green" fill="black" stroke-width="0" viewBox="-1 -1 11 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7c.48 0 .94-.05 1.38-.14-.17-.08-.2-.73-.02-1.09.19-.41.81-1.45.2-1.8-.61-.35-.44-.5-.81-.91-.37-.41-.22-.47-.25-.58-.08-.34.36-.89.39-.94.02-.06.02-.27 0-.33 0-.08-.27-.22-.34-.23-.06 0-.11.11-.2.13-.09.02-.5-.25-.59-.33-.09-.08-.14-.23-.27-.34-.13-.13-.14-.03-.33-.11s-.8-.31-1.28-.48c-.48-.19-.52-.47-.52-.66-.02-.2-.3-.47-.42-.67-.14-.2-.16-.47-.2-.41-.04.06.25.78.2.81-.05.02-.16-.2-.3-.38-.14-.19.14-.09-.3-.95s.14-1.3.17-1.75c.03-.45.38.17.19-.13-.19-.3 0-.89-.14-1.11-.13-.22-.88.25-.88.25.02-.22.69-.58 1.16-.92.47-.34.78-.06 1.16.05.39.13.41.09.28-.05-.13-.13.06-.17.36-.13.28.05.38.41.83.36.47-.03.05.09.11.22s-.06.11-.38.3c-.3.2.02.22.55.61s.38-.25.31-.55c-.07-.3.39-.06.39-.06.33.22.27.02.5.08.23.06.91.64.91.64-.83.44-.31.48-.17.59.14.11-.28.3-.28.3-.17-.17-.19.02-.3.08-.11.06-.02.22-.02.22-.56.09-.44.69-.42.83 0 .14-.38.36-.47.58-.09.2.25.64.06.66-.19.03-.34-.66-1.31-.41-.3.08-.94.41-.59 1.08.36.69.92-.19 1.11-.09.19.1-.06.53-.02.55.04.02.53.02.56.61.03.59.77.53.92.55.17 0 .7-.44.77-.45.06-.03.38-.28 1.03.09.66.36.98.31 1.2.47.22.16.08.47.28.58.2.11 1.06-.03 1.28.31.22.34-.88 2.09-1.22 2.28-.34.19-.48.64-.84.92s-.81.64-1.27.91c-.41.23-.47.66-.66.8 3.14-.7 5.48-3.5 5.48-6.84 0-3.86-3.14-7-7-7L7 1zm1.64 6.56c-.09.03-.28.22-.78-.08-.48-.3-.81-.23-.86-.28 0 0-.05-.11.17-.14.44-.05.98.41 1.11.41.13 0 .19-.13.41-.05.22.08.05.13-.05.14zM6.34 1.7c-.05-.03.03-.08.09-.14.03-.03.02-.11.05-.14.11-.11.61-.25.52.03-.11.27-.58.3-.66.25zm1.23.89c-.19-.02-.58-.05-.52-.14.3-.28-.09-.38-.34-.38-.25-.02-.34-.16-.22-.19.12-.03.61.02.7.08.08.06.52.25.55.38.02.13 0 .25-.17.25zm1.47-.05c-.14.09-.83-.41-.95-.52-.56-.48-.89-.31-1-.41-.11-.1-.08-.19.11-.34.19-.15.69.06 1 .09.3.03.66.27.66.55.02.25.33.5.19.63h-.01z"></path></svg> <span>279</span> <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 -100 500 500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg> <span>-29.9%</span></div>
                                        <div></div>
                                    </div>
                                    <div className="earth">
                                        <div className="icondiv"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> <span>279</span> <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 -100 500 500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg> <span>-29.9%</span></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="Icon1">
                                    <div className="earth">
                                        <div className="icondiv"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 14H15v-1H2V0H1v13.5l.5.5zM3 11.5v-8l.5-.5h2l.5.5v8l-.5.5h-2l-.5-.5zm2-.5V4H4v7h1zm6-9.5v10l.5.5h2l.5-.5v-10l-.5-.5h-2l-.5.5zm2 .5v9h-1V2h1zm-6 9.5v-6l.5-.5h2l.5.5v6l-.5.5h-2l-.5-.5zm2-.5V6H8v5h1z"></path></svg> <span>279</span> <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 -100 500 500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg> <span>-29.9%</span></div>
                                        <div></div>
                                    </div>
                                    <div className="earth">
                                        <div className="icondiv"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon fill="#42A5F5" points="36,44 8,44 8,8 28,8 36,16"></polygon><polygon fill="#90CAF9" points="40,40 12,40 12,4 32,4 40,12"></polygon><polygon fill="#E1F5FE" points="38.5,13 31,13 31,5.5"></polygon><path fill="#1976D2" d="M24.5,28.3c0-4.7,3.6-4.4,3.6-7.2c0-0.7-0.2-2.1-2-2.1c-2,0-2.1,1.6-2.1,2h-2.7c0-0.7,0.3-4.2,4.8-4.2 c4.6,0,4.7,3.6,4.7,4.3c0,3.5-3.8,4-3.8,7.3H24.5z M24.3,31.8c0-0.2,0-1.5,1.5-1.5c1.4,0,1.5,1.3,1.5,1.5c0,0.4-0.2,1.4-1.5,1.4 C24.5,33.2,24.3,32.2,24.3,31.8z"></path></svg> <span>279</span> <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 -100 500 500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg> <span>-29.9%</span></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="Icon1">
                                    <div className="earth">
                                        <div className="icondiv"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19,3h-2.25c0-0.553-0.447-1-1-1h-7.5c-0.553,0-1,0.447-1,1H5C3.897,3,3,3.897,3,5v15c0,1.103,0.897,2,2,2h14 c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M19,20H5V5h2v2h10V5h2V20z"></path></svg> <span>279</span> <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 -100 500 500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg> <span>-29.9%</span></div>
                                        <div></div>
                                    </div>
                                    <div className="earth">
                                        <div className="icondiv"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 3.019v-1.019h2v-1c0-0.552-0.448-1-1-1h-3c-0.552 0-1 0.448-1 1v1h2v1.019c-3.356 0.255-6 3.059-6 6.481 0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-3.422-2.644-6.226-6-6.481zM11.036 13.036c-0.944 0.944-2.2 1.464-3.536 1.464s-2.591-0.52-3.536-1.464c-0.944-0.944-1.464-2.2-1.464-3.536s0.52-2.591 1.464-3.536c0.907-0.907 2.101-1.422 3.377-1.462l-0.339 4.907c-0.029 0.411 0.195 0.591 0.497 0.591s0.527-0.18 0.497-0.591l-0.339-4.907c1.276 0.040 2.47 0.555 3.377 1.462 0.944 0.944 1.464 2.2 1.464 3.536s-0.52 2.591-1.464 3.536z"></path></svg> <span>279</span> <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 -100 500 500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg> <span>-29.9%</span></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="graph">
                            <div className="graphheader">
                                <div className="header9"><p>Visitors</p></div>
                                <div className="blue">
                                    <div className="number"><p>254,845</p></div>
                                    <div className="afternum">
                                        <div className="mostv"><p>Most Visited</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recentr">
                        <div className="recent"><p>Recent activity</p></div>
                        <div className="recent2"><p>Recent activity</p></div>
                        <div className="mv1"><p>Introduction to hadoop</p></div>
                        <div className="mv2"><p>Introduction to hadoop</p></div>
                        <div className="mv3"><p>Introduction to hadoop</p></div>
                    </div>
                    <div className="new">
                        <div className="newl">
                            <div className="ret"><p>New/Returning</p></div>
                            <div className="retn"><p>45,762/2491</p></div>
                        </div>
                        <div className="newr">
                            <div className="circled"><p><svg stroke="currentColor" fill="#4318FF" stroke-width="0" viewBox="0 0 16 16" height="0.8em" width="0.8em" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"></circle></svg>New Visiters</p></div>
                            <div className="circled1"><p><svg stroke="currentColor" fill="#6AD2FF" stroke-width="0" viewBox="0 0 16 16" height="0.8em" width="0.8em" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"></circle></svg>New Visiters</p></div>
                        </div>
                    </div>
                    <div className="bluegraph">
                        <div className="countn">
                            <div className="k1">100k</div>
                            <div className="k1">75k</div>
                            <div className="k1">50k</div>
                            <div className="k1">25k</div>
                            <div className="k1">0k</div>
                        </div>
                        <div className="graphc">
                            <div className="maingraph">
                                <div className="combine">
                                   <div className="graph1">
                                        <div className="largegraph"></div>
                                        <div className="smallgraph"></div>
                                   </div>
                                   <div className="days1">Monday</div>
                                </div>

                                <div className="combine">
                                    <div className="graph2">
                                        <div className="largegraph"></div>
                                        <div className="smallgraph"></div>
                                    </div>
                                    <div className="days">Tuesday</div>
                                </div>

                                <div className="combine">
                                    <div className="graph2">
                                        <div className="largegraph"></div>
                                        <div className="smallgraph"></div>
                                    </div>
                                    <div className="days">Wednesday</div>
                                </div>

                                <div className="combine">
                                    <div className="graph2">
                                        <div className="largegraph"></div>
                                        <div className="smallgraph"></div>
                                    </div>
                                    <div className="days">Thursday</div>
                                </div>

                                <div className="combine">
                                    <div className="graph2">
                                        <div className="largegraph"></div>
                                        <div className="smallgraph"></div>
                                    </div>
                                    <div className="days">Friday</div>
                                </div>

                                <div className="combine">
                                    <div className="graph2">
                                        <div className="largegraph"></div>
                                        <div className="smallgraph"></div>
                                    </div>
                                    <div className="days">Saturday</div>
                                </div>

                                <div className="combine">
                                    <div className="graph2">
                                        <div className="largegraph"></div>
                                        <div className="smallgraph"></div>
                                    </div>
                                    <div className="days">Sunday</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;