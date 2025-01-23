import React from "react";
import { BarChart2 } from "lucide-react";

interface MetricsSectionProps {
  metrics: { [key: string]: { [key: string]: string | number } };
}

const MetricsSection: React.FC<MetricsSectionProps> = ({ metrics }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-6">
        <BarChart2 className="h-6 w-6" />
        <h2 className="text-2xl font-bold">Metriche</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(metrics).map(([category, metrics]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-lg bold capitalize">
              {category.replace(/([A-Z])/g, " $1").trim()}
            </h3>
            <div className="space-y-2">
              {Object.entries(metrics).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}:
                  </span>
                  <span className="text-lg bold capitalize">{value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsSection;