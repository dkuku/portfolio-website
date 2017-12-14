import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Header, Container, Item, Grid } from 'semantic-ui-react'
import Project from './Project';

export default class Projects extends Component {
    static defaultProps = {
        projects:[{
            title:"Programming games solutions",
            img: "checkio.png",
            desc: "Checkio is the game for coders",
            description: "My solutions for programming excercises on py.checkio.com",
            technology: ["python 3"],
            link: "https://py.checkio.org/user/dkuku/solutions/share/567ae072ff5162edf7de698d55a163d3/"
            },{
            title:"Chalets and Caviar",
            img: "Chalets.jpg",
            desc: "Website for Real Estate Agency",
            description: "Website made using wordpress and some aditional plugins",
            technology: ["wordpress"],
            link: "http://dev-daniel-project2.pantheonsite.io/"
            },{
            title: "Brooklyn Outdoor Film Festival",
            img: 'Festival.jpg',
            desc: 'Website prototype for Film Festival',
            description: 'Frontend made using bootstrap',
            technology: ['bootstrap', "html", "js"],
            link: 'projects/prototype/index.html'
            },{
            title: 'Chat app',
            img: 'chat.png',
            desc: 'Chat app written in node.js' ,
            description: 'Aplication uses node.js express and socket.io',
            technology: ["node.js", "socket.io"],
            link: 'https://chat-node-by-kuku.herokuapp.com/'
            },{
            title: 'Todo App',
            img: 'todo.png',
            desc: 'Simple todo app',
            description: 'using javascript, jQuery and local storage',
            technology: ['html', 'css', 'js jQuery'],
            link: 'projects/TodoListProject/index.html'
            },{
            title: 'Rick Rocks',
            img: 'Asteroids.jpg',
            desc: 'Asteroids Clone' ,
            description: 'Game made using python and codeskulptor',
            technology: ["object oriented python"],
            link: 'http://www.codeskulptor.org/#user16_T5YN7P0gBI_6.py'
            },{
            title: 'RGB Game',
            img: 'rgb-game.png',
            desc: 'Color guessing game',
            description: 'Game made using html, css and javascript',
            technology: ['html', 'css', 'js'],
            link: 'projects/rgb-color-game.html'
            } 
        ]}
    render() {
        return (
            <Container>
            <Item.Group divided style={{ paddingBottom: '1em' }}>
                {this.props.projects.map((r, index) => {
                    return (
                        <Project key={index} num={index} {...r} />
                    )
                })}
            </Item.Group>
            </Container>
        )
    }
}
