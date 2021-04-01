import React from "react";
import { useState, useEffect } from "react";
import {BrowserRouter,HashRouter, Switch, Route, Link } from 'react-router-dom';
import About from "./components/About";

import {connect} from 'react-redux';
import {fetchTasks, addTask as addTaskToState} from './redux/actions';
import store from './redux/store';

import cg from './util/consoleGroup';

// components
//
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

// 'http://localhost:5000/tasks/'

function App(props) {

  let [showForm, setShowForm] = useState(false);

  useEffect(() => {
    console.log('App Component useEffect')
    getTasks();
  },[]);

  async function getTasks() {
    props.fetchTasks();
  }

  async function deleteTask(id) {
   
  }

  async function toggleReminder(id) {
    
  }

  async function addTask(taskObject) {
    //Temporay Id addition
    //
    taskObject.id = Math.floor(Math.random()*10000) + 1

    let taskAdded = fetch('http://localhost:5000/tasks/', )

    props.addTaskToState(taskObject)
  }

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <div className="container">
      <Header title="boop" buttonClicked={showForm} showFormFunc = {toggleForm}/>
      
        <Switch>

          <Route path="/" exact>
            {showForm && <AddTask addTask = {addTask}/>}
            <Tasks
              tasks={props.tasks}
              deleteTask={deleteTask}
              toggleReminder={toggleReminder}
            />
            <Footer/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>

        </Switch>
      
      
    </div>
  );
}

// Considering this function gets global state, the necesitty of this function is to process
// the global state and make available the parts that are needed for this particular component,
// the selectors folder contains functions that will help you do the same.
//
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { fetchTasks, addTaskToState })(App);
