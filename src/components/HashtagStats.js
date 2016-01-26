import React from 'react';
import R from 'ramda';
import Toggle from '../components/ToggleSwitch.js';

export default function (props) {
  var hashtags = props.hashtags;
  var list = R.map(R.nth(1), R.toPairs(R.map(R.prop('total'), hashtags)));
  var totals = list.reduce(R.mergeWith((a, b) => a + b), {});
  return (
    <div className='Leaderboard-Stats-Container'>
      <div className='Hashtag-Timeline-Container'>
        <div className='Hashtag-Timeline'>
        </div>
        <div className='Stats-Content'>
          <div className = 'Stats-Togglebox'>
            <Toggle />
          </div>
          <div className = 'Stats-Statbox'>
            <table className = "table-curve">
              <tbody>
                <tr>
                  <th>Total Edits</th>
                  <th>{R.sum(R.map(R.nth(1), R.toPairs(totals)))}</th>
                </tr>
                <tr>
                  <td>Roads</td>
                  <td>{totals.roads}</td>
                </tr>
                <tr>
                  <td>Roads</td>
                  <td>{totals.buildings}</td>
                </tr>
                <tr>
                  <td>Waterways</td>
                  <td>{totals.waterways}</td>
                </tr>
                <tr>
                  <td>Point of Interests</td>
                  <td>{totals.pois}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
