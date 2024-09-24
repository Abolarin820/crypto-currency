import React from 'react'
import "./style.css";
import { TrendingDownRounded, TrendingUpRounded } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumbers';
import { Link } from 'react-router-dom';

function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`} >
    <tr className="list-row">
      <Tooltip title="Coin image" placement='bottom-start'>
        <td className='td-image'>
          <img src={coin.image} alt={coin.id} className="coin-logo" />
        </td>
      </Tooltip>
 
      <Tooltip title="Coin info" placement='bottom-start'>
      <td>
        <div className='name-col'>
          <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
      </td>
      </Tooltip>
      { 
        coin.price_change_percentage_24h > 0 ?
          (
          <Tooltip title="Price change in 24Hrs" placement='bottom-start'>
            <td className='chip-flex'>
              <div className="price-chip">
                {coin.price_change_percentage_24h.toFixed(3)}%
              </div>
              <div className='icon-chip td-icon'>
                <TrendingUpRounded />
              </div>
            </td>
          </Tooltip>
          )
          :
          (
            <Tooltip title="Price change in 24Hrs" placement='bottom-start'>
            <td className='chip-flex'>
              <div className="price-chip chip-red">
                {coin.price_change_percentage_24h.toFixed(3)}%
              </div>
              <div className='icon-chip-red chip-red td-icon'>
                <TrendingDownRounded />
              </div>
            </td>
            </Tooltip>
          )
      }
      <td>
        <Tooltip title="Current price" placement='bottom'>
          <h3 className="coin-price td-center-align"
            style={{
              color: coin.price_change_percentage_24h < 0 ?
                "var(--red)" : "var(--green)"
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </Tooltip>
      </td>
      <Tooltip title="Total volume" placement='bottom-end'>
        <td><p className="total-volume td-right-align td-total-volume">Volume: {coin.total_volume.toLocaleString()}</p></td>
      </Tooltip>
      <Tooltip title="Market value" placement='bottom-end'> 
        <td className='desktop-td-mrk'>
          <p className="total-volume td-right-align">Market: ${coin.market_cap.toLocaleString()}</p>
        </td> 
      </Tooltip>
      <Tooltip title="Market cap" placement='bottom-end'> 
        <td className='mobile-td-mrk'>
          <p className="total-volume td-right-align">
             ${convertNumber(coin.market_cap.toLocaleString())}
          </p>
        </td> 
      </Tooltip>
    </tr>
  </Link>
  )
}

export default List
