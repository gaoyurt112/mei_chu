import './App.scss'
import { Select } from '@douyinfe/semi-ui'
function App () {
  const list = [
    { value: 'abc', label: '管理处一', otherKey: 0 },
    { value: 'abc', label: '管理处二', otherKey: 1 },
    { value: 'abc', label: '管理处三', otherKey: 2 },
  ]
  return (
    <div className="App">
      <div className='title'>实时就餐人数展示</div>
      <div className='main-top'>
        {/* 昨日数据看板 */}
        <div className='recent-data'></div>
        {/* 用餐人数 */}
        <div className='pe-number'>
          <div className='number'>200</div>
          <div className='ren'>人</div>
        </div>
        {/* 管理处选择 */}
        <div className='selectForm'>
          <div className='select-title'>管理处：</div>
          <div><Select placeholder='请选择管理处' style={{ width: 300 }} optionList={list}>
          </Select></div>

        </div>
        {/* 餐厅状态 */}
        <div className='pe-status'></div>
      </div>

      <div className='main-bottom'>

      </div>





    </div>
  )
}

export default App
