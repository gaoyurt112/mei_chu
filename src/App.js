import './App.scss'
import { Select, Progress } from '@douyinfe/semi-ui'
import BarCharts from './components/BarCharts'
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
        <div className='recent-data'>
          <div className='recent-data-title'>
            本周数据看板
          </div>
          <div className="charts-week">
            <BarCharts
              style={{ width: '620px', height: '300px' }}
              xData={['周一', '周二', '周三', '周四', '周五', '周六', '周日',]}
              yData={[50, 60, 70, 62, 55, 42, 32]}
            >
            </BarCharts>
          </div>
        </div>
        {/* 用餐人数 */}
        <div className='pe-number'>
          <div className='number'>200</div>
          <div className='ren'>人</div>
        </div>
        {/* 管理处选择 */}
        <div className='selectForm'>
          <div className='select-title'>管理处：</div>
          <div><Select placeholder='请选择管理处' style={{ width: 300 }} optionList={list}>
          </Select>
          </div>
        </div>
        {/* 餐厅状态 */}
        <div className='pe-status'>
          <div className='pe-status-title'>
            当前承载状态
          </div>
          <div className='progress'>
            <div className='status-text'>较多</div>
            <Progress
              percent={66}
              type="circle"
              width={150}
              strokeWidth={7}
              style={{ margin: 5 }}
              stroke="var(--semi-color-warning)"
              // var(--semi-color-danger) 红
              //var(--semi-color-success) 绿
              aria-label="disk usage"
            />
          </div>

        </div>
      </div>

      <div className='main-bottom'>
        <div className="main-bottom-title">
          近30日数据看板
        </div>
        <div className="charts-mounth">
          <BarCharts
            style={{ width: '1832px', height: '259px' }}
            xData={['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号', '31号']}
            yData={[50, 60, 70, 62, 55, 42, 32, 34, 87, 12, 87, 45, 12, 54, 12, 65, 41, 63, 46, 24, 46, 35, 75, 35, 57, 42, 68, 43, 24, 53, 13]}
          >
          </BarCharts>
        </div>
      </div>
      <div className='logo'>
      </div>
    </div>
  )
}

export default App
