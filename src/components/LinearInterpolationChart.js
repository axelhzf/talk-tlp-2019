import { theme } from './theme';
import { Line } from 'react-chartjs-2';

export function LinearInterpolationChart() {
  return (
    <div css={{ width: 500, height: 250 }}>
      <Line
        data={{
          labels: [0, 300],
          datasets: [
            {
              data: [0, 150],
              label: 'time',
              fill: false,
              borderColor: theme.colors.primary
            }
          ]
        }}
        options={{
          animation: {
            duration: 0
          },
          scales: {
            yAxes: [
              {
                scaleLabel: { display: true, labelString: 'Position (px)' }
              }
            ],
            xAxes: [
              {
                scaleLabel: { display: true, labelString: 'Time (ms)' }
              }
            ]
          },
          legend: { display: false }
        }}
      />
    </div>
  );
}
