import { Hex } from "viem"
import { formatUnits, hexToNumber } from "viem/utils"

export const parseHexToString = (hex: Hex, decimals: number = 18): string => formatUnits(BigInt(hexToNumber(hex)), decimals)
