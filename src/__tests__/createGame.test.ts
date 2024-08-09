import '@testing-library/jest-dom'
import createGame from "@/src/lib/createGame.ts"

describe("createGame", () => {
    it("Creates a Game and checks if it returns a valid id", () => {
        const id = createGame("1@guest.ie", "2@guest.ie")
        expect(id).toBeGreaterThan(0)
    })
})

