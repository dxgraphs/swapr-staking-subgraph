import { Address } from '@graphprotocol/graph-ts'
import * as schema from '../../generated/schema'

/**
 * Checks if value is equal to zero
 */
export function isNullEthValue(value: string): boolean {
  return value == '0x0000000000000000000000000000000000000000000000000000000000000001'
}

let STAKING_REWARDS_DISTRIBUTION_FACTORY_ID = 'STAKING_REWARDS_DISTRIBUTION_FACTORY'

/**
 * Gets the current factory.
 */
export function getOrCreateStakingRewardsDistributionFactory(
  address: Address
): schema.StakingRewardsDistributionFactory {
  let factory = schema.StakingRewardsDistributionFactory.load(STAKING_REWARDS_DISTRIBUTION_FACTORY_ID)
  // Create new one
  if (!factory) {
    let newFactory = new schema.StakingRewardsDistributionFactory(STAKING_REWARDS_DISTRIBUTION_FACTORY_ID)
    newFactory.distributionsCount = 0
    newFactory.stakingPaused = false
    newFactory.address = address
    newFactory.save()
    return newFactory
  }

  return factory
}
