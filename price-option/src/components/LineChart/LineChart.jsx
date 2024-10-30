import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
//functon nam an import kora nam same hoyeche, ejonno LChart nam korechi
const LineChart = () => {

    // (ChatGPT command) i want to draw a line chart for  math marks. give me data of 10 students   -> this data in array like object form -> add physics and chemistry marks
     const mathMarksData = [
        { id: 1, name: "Alice", math: 78, physics: 82, chemistry: 74 },
        { id: 2, name: "Bob", math: 85, physics: 79, chemistry: 80 },
        { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 91 },
        { id: 4, name: "David", math: 67, physics: 73, chemistry: 70 },
        { id: 5, name: "Eva", math: 74, physics: 76, chemistry: 78 },
        { id: 6, name: "Frank", math: 88, physics: 84, chemistry: 87 },
        { id: 7, name: "Grace", math: 91, physics: 89, chemistry: 90 },
        { id: 8, name: "Hannah", math: 83, physics: 81, chemistry: 79 },
        { id: 9, name: "Ian", math: 69, physics: 72, chemistry: 68 },
        { id: 10, name: "Jack", math: 95, physics: 94, chemistry: 92 }
      ];
      
      

    return (
        <div>
            <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="math" stroke='#8884d8'> </Line>
                <Line dataKey="physics" stroke="red"> </Line>
                <Line dataKey="chemistry" stroke='green'> </Line>
            </LChart>
        </div>
    );
};

export default LineChart;