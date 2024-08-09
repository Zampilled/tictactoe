import '@testing-library/jest-dom'
import {checkTriplet, checkDiag, checkDraw, checkCol, checkRow} from "@/src/lib/checkBoard"

describe('checkTriplet', () => {
    it('Checks Triplets by iterating over every possibility including numbers not used in future functionality', () => {
        let result:number = 0;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                for (let k = 0; k < 10; k++) {
                    if(i != 0 && j != 0 && k != 0) {
                        if (i == j && j == k) {
                            result = i
                        }else {
                            result = 0
                        }
                    }else{
                        result = 0
                    }
                    expect(checkTriplet(i,j,k)).toBe(result)
                }
            }
        }
    })
})

describe("checkCol", () => {
    it("Check Columns of Boards with example boards of both no wins, X wins and 0 wins", () =>{
        const negativeBoards = [[0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,0,2,0,1,0,2], [1,0,0,1,0,0,2,0,0], [1,0,0,0,1,0,0,0,1]]
        const oneBoards  = [[1,0,0,1,0,0,1,0,0],[0,1,0,0,1,0,0,1,0],[0,0,1,0,0,1,0,0,1]]
        const twoBoards = [[2,0,0,2,0,0,2,0,0], [0,2,0,0,2,0,0,2,0], [0,0,2,0,0,2,0,0,2]]
        for (let i = 0; i < negativeBoards.length; i++) {
            expect(checkCol(negativeBoards[i])).toBe(0)
        }
        for (let i = 0; i < oneBoards.length; i++) {
            expect(checkCol(oneBoards[i])).toBe(1)
        }
        for (let i = 0; i < twoBoards.length; i++) {
            expect(checkCol(twoBoards[i])).toBe(2)
        }
    })
})

describe("checkRows", () => {
    it("Check Rows of Boards with example boards of both no wins, X wins and 0 wins", () =>{
        const negativeBoards = [[0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,0,2,0,1,0,2], [1,0,0,1,0,0,2,0,0], [1,0,0,0,1,0,0,0,1]]
        const oneBoards  = [[1,1,1,0,0,0,0,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,1,1,1]]
        const twoBoards = [[2,2,2,0,0,0,0,0,0], [0,0,0,2,2,2,0,0,0], [0,0,0,0,0,0,2,2,2]]
        for (let i = 0; i < negativeBoards.length; i++) {
            expect(checkRow(negativeBoards[i])).toBe(0)
        }
        for (let i = 0; i < oneBoards.length; i++) {
            expect(checkRow(oneBoards[i])).toBe(1)
        }
        for (let i = 0; i < twoBoards.length; i++) {
            expect(checkRow(twoBoards[i])).toBe(2)
        }
    })
})

describe("checkDiag", () => {
    it("Check Diagonals of Boards with example boards of both no wins, X wins and 0 wins", () =>{
        const negativeBoards = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,2,0,1,0,2], [1,0,0,1,0,0,2,0,0]]
        const oneBoards  = [[1,0,0,0,1,0,0,0,1],[0,0,1,0,1,0,1,0,0]]
        const twoBoards = [[2,0,0,0,2,0,0,0,2], [0,0,2,0,2,0,2,0,0]]
        for (let i = 0; i < negativeBoards.length; i++) {
            expect(checkDiag(negativeBoards[i])).toBe(0)
        }
        for (let i = 0; i < oneBoards.length; i++) {
            expect(checkDiag(oneBoards[i])).toBe(1)
        }
        for (let i = 0; i < twoBoards.length; i++) {
            expect(checkDiag(twoBoards[i])).toBe(2)
        }
    })
})

describe("checkDraw", () => {
    it("Check Draws of Boards with example boards of both incomplete games and draw games", () =>{
        const negativeBoards = [[0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,0,2,0,1,0,2],[1,0,0,1,0,0,2,0,0],[1,0,0,0,1,0,0,0,1]]
        const winBoards  = [[1,2,1,1,1,2,2,1,2],[1,1,2,2,2,1,1,2,1],[2,1,1,1,2,1,1,1,2]]
        for (let i = 0; i < negativeBoards.length; i++) {
            expect(checkDraw(negativeBoards[i])).toBe(false)
        }
        for (let i = 0; i < winBoards.length; i++) {
            expect(checkDraw(winBoards[i])).toBe(true)
        }

    })
})
