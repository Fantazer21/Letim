import {addTaskAC, tasksReducer} from './tasks-reducer';
import {TasksStateType} from '../App';

test('Correct REMOVE_TASK', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            { id: "1", title: "CSS", isDone: false },
            { id: "2", title: "JS", isDone: true },
            { id: "3", title: "React", isDone: false }
        ],
        "todolistId2": [
            { id: "1", title: "bread", isDone: false },
            { id: "2", title: "milk", isDone: true },
            { id: "3", title: "tea", isDone: false }
        ]
    };

    const endState = tasksReducer(startState, {type: 'REMOVE_TASK',todolistId: 'todolistId2', taskId: '2'
         })

    expect(endState).toEqual({
        "todolistId1": [
            { id: "1", title: "CSS", isDone: false },
            { id: "2", title: "JS", isDone: true },
            { id: "3", title: "React", isDone: false }
        ],
        "todolistId2": [
            { id: "1", title: "bread", isDone: false },
            { id: "3", title: "tea", isDone: false }
        ]
    });

});

test('Correct ADD_TASK', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            { id: "1", title: "CSS", isDone: false },
            { id: "2", title: "JS", isDone: true },
            { id: "3", title: "React", isDone: false }
        ],
        "todolistId2": [
            { id: "1", title: "bread", isDone: false },
            { id: "2", title: "milk", isDone: true },
            { id: "3", title: "tea", isDone: false }
        ]
    };
    const newTask = { id: "4", title: "Juice", isDone: false }
    //const addTaskAC = {type:'ADD_TASK', todolistId: 'todolistId2', newTask: newTask}


    const endState = tasksReducer(startState,addTaskAC(newTask) )

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(4);
    expect(endState["todolistId1"][2].title).toBe('React');
    expect(endState["todolistId2"][3].id).toBe('4');
    expect(endState["todolistId2"][3].title).toBe("Juice");
    expect(endState["todolistId2"][3].isDone).toBe(false);
})

test( 'Correct CHANGE_TASK_STATUS', ()=> {
        const startState: TasksStateType = {
            "todolistId1": [
                { id: "1", title: "CSS", isDone: false },
                { id: "2", title: "JS", isDone: true },
                { id: "3", title: "React", isDone: false }
            ],
            "todolistId2": [
                { id: "1", title: "bread", isDone: false },
                { id: "2", title: "milk", isDone: true },
                { id: "3", title: "tea", isDone: false }
            ]
        };

        const endState = tasksReducer(startState, {type: 'CHANGE_TASK_STATUS', todolistId: 'todolistId2', taskId: '2', isDone: false})

        expect(endState[ "todolistId2"][1].title).toBe('milk');
        expect(endState[ "todolistId2"][1].isDone).toBe(false)
})

test( 'Correct CHANGE_TASK_TITLE', ()=> {
    const startState: TasksStateType = {
        "todolistId1": [
            { id: "1", title: "CSS", isDone: false },
            { id: "2", title: "JS", isDone: true },
            { id: "3", title: "React", isDone: false }
        ],
        "todolistId2": [
            { id: "1", title: "bread", isDone: false },
            { id: "2", title: "milk", isDone: true },
            { id: "3", title: "tea", isDone: false }
        ]
    };

    const endState = tasksReducer(startState, {type: 'CHANGE_TASK_TITLE', todolistId: 'todolistId2', taskId: '2', title: 'Coffee'})

    expect(endState[ "todolistId2"][1].title).toBe('Coffee');
    expect(endState[ "todolistId2"][1].isDone).toBe(true)
})