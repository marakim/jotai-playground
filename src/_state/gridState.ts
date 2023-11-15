import { atom } from "jotai";
import {atomFamily} from "jotai/utils"

export const rowAtom = atomFamily((idx: number) => atom(idx + 1))
export const colAtom = atomFamily((idx: number) => atom((idx + 1) * 10))