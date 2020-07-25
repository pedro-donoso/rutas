const ListPrograming = {
    name: "ListPrograming",
    template: `
    <div>
        <ul>
            <li v-for="l in language">{{ l }}</li>
        </ul>
    </div>`,
    data: function() {
        return {
            language:["C#","Python","JavaScript","PHP"]
        }
    } 
}