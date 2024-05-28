import React, { useEffect, useState } from "react";

const Cricket = () => {
  const Totalover=2;
  const [win, setwin] = useState("")
  const [count, setcount] = useState(0)
  const [Team1runs, setTeam1runs] = useState(0);
  const [Team2runs, setTeam2runs] = useState(0);
  const [Team2wickets, setTeam2wickets] = useState(0)
  const [wickets, setWickets] = useState(0);
  const [clicked, setclicked] = useState([]);
  const [balls, setballs] = useState(0);

  useEffect(() => {
    if(balls===6)
        {
            setclicked([])
            setballs(0)
            setcount(count+1)
        }
        if(count===(Totalover*2))
          {
            if(Team1runs>Team2runs)
              {
                setwin("Team1")
              }
              else
              {
                setwin("Team2")
              }
          }
  }, [balls, count, Team1runs, Team2runs])
  
  const handleRunClick = (run) => {
    if(count>=Totalover || wickets===10)
      {
        setTeam2runs(Team2runs+run)    
        setclicked([...clicked, run]);
        setballs(balls+1);
      }
      else{
        setTeam1runs(Team1runs + run);
        setclicked([...clicked, run]);
        setballs(balls+1);
      }
    
  };
  const handledotClick=()=>{
    setclicked([...clicked, '.']);
    setballs(balls+1);
  }
  const handlewideClick=()=>{
    if(count>=Totalover || wickets===10)
      {
        setTeam2runs(Team2runs+1)
        setclicked([...clicked,'wide'])
      }
      else{
        setTeam1runs(Team1runs + 1);
        setclicked([...clicked,'Wide'])
      }
    
  }
  const handleNoballClick=()=>{
    if(count>=Totalover || wickets===10)
      {
        setTeam2runs(Team2runs+1)
        setclicked([...clicked,'N'])
      }
      else{
        setTeam1runs(Team1runs + 1);
        setclicked([...clicked,'N'])
      }
    
  }
  const handlewicket=()=>{
    if(count>=Totalover || wickets===10)
      {
        setTeam2wickets(Team2wickets+1)
        setclicked([...clicked,'W'])
        setballs(balls+1);
      }
      else{
        setWickets(wickets+ 1);
        setclicked([...clicked,'W'])
        setballs(balls+1);
      }
  }
  const setnewgame=()=>{
    setballs(0);
    setclicked([]);
    setWickets(0);
    setTeam2wickets(0);
    setTeam2runs(0);
    setTeam1runs(0);
    setcount(0);
    setwin("");
  }

  return (
    <div className="flex justify-center items-center m-2 p-2 bg-gray-400 h-[35rem]">
      <div className="bg-white m-2 p-2 w-[45%] rounded-lg">
      {win ? <>
        <p>{win} Win</p>
        <button onClick={setnewgame} className="bg-green-400 m-2 p-2 rounded-lg">New Game</button>
      </>:<>
      <div className="flex justify-center items-center">
      {
        clicked.map((value,index)=>{
            return <div key={index} className="m-1 p-2 text-center bg-blue-200 rounded-full w-12 h-12 flex items-center justify-center">
              {value}
            </div>
        })
      }
      </div>
        <div className="m-2 p-2 ">
          {[1, 2, 3, 4, 5, 6].map((run) => (
            <button
              key={run}
              className="m-1 p-1 bg-blue-500 w-[15%] rounded-lg"
              onClick={() => handleRunClick(run)}
            >
              {run}
            </button>
          ))}
        </div>
        <div className="m-2 p-2">
          <button className="m-2 p-2 w-[15%] bg-blue-500 rounded-lg"
          onClick={()=> handledotClick()}
          >
            Dot Ball
          </button>
          <button
            className="m-2 p-2 w-[15%] bg-blue-500 rounded-lg"
            onClick={handlewicket}
          >
            Wicket
          </button>
          <button
            className="m-2 p-2 w-[20%] bg-blue-500 rounded-lg"
            onClick={handlewideClick}
          >
            Wide Ball
          </button>
          <button
            className="m-2 p-2 w-[15%] bg-blue-500 rounded-lg"
            onClick={handleNoballClick}
          >
            No Ball
          </button>
        </div>
        {(count===Totalover)||(wickets===10)?<p>
        <h1 className="m-2 p-2 bg-slate-300 rounded-md font-mono text-[1.5rem]">Team2 Score</h1>
          Your current score is {Team2runs} runs and {Team2wickets} wickets.
        </p>:<p>
        <h1  className="m-2 p-2 bg-slate-300 rounded-md font-mono text-[1.5rem]">Team1 Score</h1>
          Your current score is {Team1runs} runs and {wickets} wickets.
        </p>}
        {count<2?<h1 className="m-2 p-2 bg-gray-200 text-[1.1rem]">over {count} Runs {Team1runs} wickets {wickets}</h1>:<h1 className="m-2 p-2 bg-gray-200 text-[1.1rem]">over {count} Runs {Team2runs} wickets {Team2wickets}</h1>}
        
      </>}
      

        

      </div>
    </div>
  );
};

export default Cricket;
