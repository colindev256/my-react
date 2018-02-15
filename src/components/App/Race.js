import React from 'react';
import { Container, Dropdown, Divider  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Jockey } from './Jockey';
import data from '../../team.json';

const arr = [];
while(arr.length < 5){
    const randomnumber = Math.floor(Math.random() * 30) + 1;
    if(arr.indexOf(randomnumber) >= 0) {
        continue;
    }
    arr.push(randomnumber);
}

const jockeys = data.map(({ id, login }) => ({ value: id, text:login }));
console.log(jockeys);

// Race Component
export const Race = (props) => { 
    if(props.start) {
        return (
            <div >
                <Jockey avatar = { data[arr[0]].avatar_url } color="#FFD700" />
                <Jockey avatar = { data[arr[1]].avatar_url } color="#B413EC" />
                <Jockey avatar = { data[arr[2]].avatar_url } color="#FE9A76" />
                <Jockey avatar = { data[arr[3]].avatar_url } color="#008080" />
                <Jockey avatar = { data[arr[4]].avatar_url } color="#0E6EB8" />
                <p>Inside race</p>
            </div>
        );
    } else {
        return (
            <div className="App-container">
                <div className="App-dropdown">
                    <Container>
                        <Divider />
                        <p>Add jockeys to the race in the dropdown below (and click Start)</p>
                        <Dropdown 
                        placeholder='Select Jockey...' 
                        selection
                        search
                        options={jockeys}
                        renderLabel={({ login }) => 1}
                        />
                        <button className="ui primary button add">Add</button>
                    </Container>
                </div>
                
                <div className="App-jockeys">
                    <Divider />
                    <p>Jockeys selected to race</p>
                </div>   
            </div>    
        );
    }
}