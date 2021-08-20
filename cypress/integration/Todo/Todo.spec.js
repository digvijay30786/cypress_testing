describe("Task app test", () => {
    
    
    beforeEach(() => {
        cy.intercept('GET', '/tasks', (req) => {
            req.reply({
                statusCode: 200,
                fixture:'task.json'
            })
        })
        cy.visit("http://localhost:3000/");
    })
    it("Visit Home Page", () => {
       
        cy.get("h1").should("have.text", "Tasks");
        cy.get(".task-input").should("have.attr", "placeholder", "Add something?")
        cy.focused().should("have.class", "task-input");
    });

    it("Type into the input box should work Correctly", () => {
        const text = "Masai";
        cy.get(".task-input").type(text).should("have.value", text);
    });

    it("Add Item in Todo List", () => {

        const text = "Masai";
        const response = {
            statusCode: 201,
            body: {
                title: text,
                status: false,
                id:3
            },
          }
        cy.intercept("POST", "/tasks", response);
        cy.get(".task-input").type(text).type("{enter}").should("have.value", "");
        cy.get(".task-list li").should("have.length", 3).contains(text);

    })
})