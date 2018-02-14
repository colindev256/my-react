import React from 'react';
import { Jockey } from './Jockey';
import data from '../../team.json';

export const Race = (props) => { 

    if(props.start) {
        console.log(props.start);
        console.log(data.length);

        console.log(props);

        const arr = []
        while(arr.length < 5){
            const randomnumber = Math.floor(Math.random() * 30) + 1;
            if(arr.indexOf(randomnumber) >= 0) {
                continue;
            }
            arr.push(randomnumber);
        }

        return (
            <div>
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
            <div>
                <p>Click the Start button to start a new race</p>
                <div>
                    <p>race track</p>
                </div>
            </div>
            
        );
    }




}