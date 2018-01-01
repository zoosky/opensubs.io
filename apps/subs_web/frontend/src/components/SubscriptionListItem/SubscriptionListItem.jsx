import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import routes from 'constants/routes'
import colors from 'constants/colors'
import Subscription from 'data/domain/subscriptions/Subscription'
import Styles from './Styles'

const SubscriptionListItem = ({ subscription, current }) => {
  const isDue = current && subscription.isCurrentDue

  return (
    <Styles
      className="SubscriptionListItem mb2 list"
      background={isDue ? colors.disabled.bg : subscription.color}
      textColor={isDue ? colors.disabled.text : subscription.textColor}
    >
      <Link
        to={routes.subscriptionsShow(subscription.id)}
        className="flex items-center dim pointer no-underline"
      >
        <div className="w-30 w-40-ns pa2 pa3-ns">
          <span className="SubscriptionListItem--name">
            {subscription.name}
          </span>
        </div>
        <div className="w-30 w-30-ns pa2 pa3-ns tc">
          <span className="SubscriptionListItem--next-bill-date">
            {current ? subscription.humanCurrentBillDate : subscription.humanNextBillDate}
          </span>
        </div>
        <div className="w-10 w-20-ns pa2 pa3-ns tc" />
        <div className="w-30 w-10-ns pa2 pa3-ns tr">
          <span className="SubscriptionListItem--amount">
            {subscription.amountFormatted}
          </span>
        </div>
      </Link>
    </Styles>
  )
}

SubscriptionListItem.propTypes = {
  subscription: PropTypes.instanceOf(Subscription).isRequired,
  current: PropTypes.bool,
}

SubscriptionListItem.defaultProps = {
  current: false,
}

export default SubscriptionListItem
