const Estimates = new Page({
    name:'Estimates',
    icon:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="768" height="768" viewBox="0 0 768 768"><title></title><g id="icomoon-ignore"></g><path d="M384 640.5q93 0 158.25-66t65.25-159-65.25-158.25-158.25-65.25-158.25 65.25-65.25 158.25 65.25 159 158.25 66zM609 237q25.5 33 44.25 84.75t18.75 93.75q0 118.5-84 203.25t-204 84.75-204-84.75-84-203.25 84-203.25 204-84.75q40.5 0 93.75 19.5t86.25 45l45-46.5q24 19.5 45 45zM352.5 448.5v-192h63v192h-63zM480 31.5v64.5h-192v-64.5h192z"></path></svg>',
    views:[{
        name:'Tasks',
        icon:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="384" height="448" viewBox="0 0 384 448"><title></title><g id="icomoon-ignore"></g><path d="M367 95c9.25 9.25 17 27.75 17 41v288c0 13.25-10.75 24-24 24h-336c-13.25 0-24-10.75-24-24v-400c0-13.25 10.75-24 24-24h224c13.25 0 31.75 7.75 41 17zM256 34v94h94c-1.5-4.25-3.75-8.5-5.5-10.25l-78.25-78.25c-1.75-1.75-6-4-10.25-5.5zM352 416v-256h-104c-13.25 0-24-10.75-24-24v-104h-192v384h320z"></path></svg>',
        title:'View all Tasks',
        body:'View all talsk body',
    },
    {
        name:'Estimates',
        icon:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="448" height="448" viewBox="0 0 448 448"><title></title><g id="icomoon-ignore"></g><path d="M424 96c13.25 0 24 10.75 24 24v304c0 13.25-10.75 24-24 24h-240c-13.25 0-24-10.75-24-24v-72h-136c-13.25 0-24-10.75-24-24v-168c0-13.25 7.75-31.75 17-41l102-102c9.25-9.25 27.75-17 41-17h104c13.25 0 24 10.75 24 24v82c9.75-5.75 22.25-10 32-10h104zM288 149.25l-74.75 74.75h74.75v-74.75zM128 53.25l-74.75 74.75h74.75v-74.75zM177 215l79-79v-104h-96v104c0 13.25-10.75 24-24 24h-104v160h128v-64c0-13.25 7.75-31.75 17-41zM416 416v-288h-96v104c0 13.25-10.75 24-24 24h-104v160h224z"></path></svg>',
        title:'View all Estimates',
        body:'View all Estimates body',
    },
    {
        name:'CreateEstimate',
        icon:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="768" height="768" viewBox="0 0 768 768"><title></title><g id="icomoon-ignore"></g><path d="M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM415.5 223.5v129h129v63h-129v129h-63v-129h-129v-63h129v-129h63z"></path></svg>',
        title:'Create a new Estimate',
        body:'Create a new Estimate',
    }],
});

Estimates.render();