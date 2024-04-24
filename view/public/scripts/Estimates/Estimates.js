const Estimates = new Page({
    name:'Estimates',
    icon:'Icon-',
    views:[{
        name:'Tasks',
        icon:'Icon-',
        title:'View all Tasks',
        body:'View all talsk body',
    },
    {
        name:'Estimates',
        icon:'Icon-',
        title:'View all Estimates',
        body:'View all Estimates body',
    },
    {
        name:'CreateEstimate',
        icon:'Icon-',
        title:'Create a new Estimate',
        body:'Create a new Estimate',
    }],
});

Estimates.render();