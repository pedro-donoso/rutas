const Lists = {
    name: "Lists",
    template: `
    <div>
        <ul>
            <li v-for="person in people">{{ person }}</li>
        </ul>
    </div>`,
    data: function() {
        return {
            people:["Andres","Juan","Pepe","Alejandro"]
        }
    }  
}