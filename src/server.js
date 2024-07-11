import { createServer, Model } from "miragejs"


createServer({
    models: {
        vans: Model,
    },

    seeds(server) {

        server.create("van", { id: "1", name: "10 Minute Energizing Morning Yoga Full Body Stretch",  imageUrl: "https://i.ytimg.com/vi/UByn_Xbzjwc/maxresdefault.jpg",
        video:"https://youtu.be/UByn_Xbzjwc", type: "Yoga" })
        
        server.create("van", { id: "2", name: "Full Body Flow | 20-Minute Yoga Practice",  imageUrl: "https://i.ytimg.com/vi/b1H3xO3x_Js/maxresdefault.jpg", video:"https://youtu.be/b1H3xO3x_Js", type: "Yoga" })

        server.create("van", { id: "3", name: "25-Minute Upper Body Yoga | Feel Good Flow",  imageUrl: "https://i.ytimg.com/vi/62rrpPfiAoI/maxresdefault.jpg", video:"https://youtu.be/62rrpPfiAoI", type: "Yoga" })




        server.create("van", { id: "4", name: "Ballet Tutorial For All Levels", imageUrl: "https://i.ytimg.com/vi/o-QA_AQNhm8/maxresdefault.jpg", video:"https://youtu.be/o-QA_AQNhm8", type: "Ballet" })

        server.create("van", { id: "5", name: "Learn Basic Ballet Vocab with Demonstration for Beginners",  imageUrl: "https://i.ytimg.com/vi/JWLy4IKgd1M/maxresdefault.jpg", video:"https://youtu.be/JWLy4IKgd1M", type: "Ballet" })

        server.create("van", { id: "6", name: "Ballet Class For Beginners | How To Do Simple Ballet Moves",  imageUrl: "https://i.ytimg.com/vi/Uy67yin1ylI/maxresdefault.jpg", video:"https://youtu.be/Uy67yin1ylI", type: "Ballet" })





        server.create("van", { id: "7", name: "How to Breakdance | 6 Step",  imageUrl: "https://i.ytimg.com/vi/zPdQ1gN7Ngo/maxresdefault.jpg",
        video:"https://youtu.be/zPdQ1gN7Ngo", type: "Breakdance" })
        
        server.create("van", { id: "8", name: "5 Easy Breakdance Moves Everybody",  imageUrl: "https://i.ytimg.com/vi/z1zmCVoRXMA/maxresdefault.jpg", video:"https://youtu.be/z1zmCVoRXMA?t=3", type: "Breakdance" })

        server.create("van", { id: "9", name: "3 Easy BREAK DANCE POWERMOVES for Beginners",  imageUrl: "https://i.ytimg.com/vi/Ligfj_NcKGo/maxresdefault.jpg", video:"https://youtu.be/Ligfj_NcKGo", type: "Breakdance" })




        server.create("van", { id: "10", name: "HIP HOP Dance Tutorial for Beginners",  imageUrl: "https://i.ytimg.com/vi/J-wgAi27IOo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCxokKd9OkXVQpgVU4WqK4L-0VkkQ", video:"https://youtu.be/1sD51hC0yRg", type: "Dance" })

        server.create("van", { id: "11", name: "HIP HOP Dance Choreography Tutorial for Beginners",  imageUrl: "https://i.ytimg.com/vi/1WIA6Yvj8Yg/maxresdefault.jpg", video:"https://youtu.be/1WIA6Yvj8Yg", type: "Dance" })

        server.create("van", { id: "12", name: "How to Pin Drop / Knee Drop", imageUrl: "https://i.ytimg.com/vi/KZhRZODwCes/maxresdefault.jpg", video:"https://youtu.be/KZhRZODwCes", type: "Dance" })

    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/vans", (schema, request) => {
            return schema.vans.all()
        })
        
        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })
    }
})