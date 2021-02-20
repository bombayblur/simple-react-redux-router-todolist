import React from "react";
import { useState, useEffect } from "react";
import {BrowserRouter,HashRouter, Switch, Route, Link } from 'react-router-dom';
import About from "./components/About";

// components
//
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  let [tasks, setTasks] = useState([]);

  let [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getTasks();
  },[]);

  async function getTasks() {
    let tasksList = await fetch('http://localhost:5000/tasks', {
      method:'GET'
    });
    tasksList = await tasksList.json();
    console.log('Get Tasks Fired');
    setTasks(tasksList);
  }

  async function deleteTask(id) {
    let deletetedTask = await fetch('http://localhost:5000/tasks/'+id, {
      method:'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id));
  }

  async function toggleReminder(id) {
    let url = 'http://localhost:5000/tasks/'+id;

    let task = await fetch(url , {
      method:'GET',
    });
    task = await task.json();

    task.reminder = !task.reminder;

    let updatedTask = await fetch(url, {
      method:'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(task)
    })

    updatedTask = await updatedTask.json();

    setTasks(
      tasks.map((task) => {
        if(task.id == id){
          return updatedTask;
        }
        return task;
      })
    );
  }

  async function addTask(taskObject) {

    let taskToAdd = await fetch('http://localhost:5000/tasks', {
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(taskObject)
    });

    taskToAdd = await taskToAdd.json();

    console.log(taskToAdd);

    tasks.forEach((task)=> delete task.justAdded);
    taskToAdd.justAdded = true;

    setTasks([...tasks, taskToAdd]);
  }

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <div className="container">
      <Header title="boop" buttonClicked={showForm} showFormFunc = {toggleForm}/>
      <HashRouter>
        <Switch>

          <Route path="/" exact>
            {showForm && <AddTask addTask = {addTask}/>}
            <Tasks
              tasks={tasks}
              deleteTask={deleteTask}
              toggleReminder={toggleReminder}
            />
            <Footer/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>

        </Switch>
      </HashRouter>
      
    </div>
  );
}

export default App;




// ===============





// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams,
//   useLocation
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function useQuery() {
//   let searchParams =  new URLSearchParams(useLocation().search);
//   return Object.fromEntries(searchParams);
// }

// function Topic() {
//   let query = useQuery();
//   let match = useRouteMatch();
//   let { topicId } = useParams();
//   return (
//     <>
//       {console.log(query)}
//       <h3>Requested topic ID: {topicId}</h3>
//     </>
//       );
// }