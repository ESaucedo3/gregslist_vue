import { Job } from "@/models/Job.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";
import { logger } from "@/utils/Logger.js";

class JobsService {
  async createJob(jobData) {
    const response = await api.post("api/jobs", jobData);
    const newJob = new Job(response.data);
    AppState.jobs.push(newJob);
    logger.log(newJob);
  }
  async getJobs() {
    const response = await api.get("api/jobs");
    const jobs = response.data.map((job) => new Job(job));
    AppState.jobs = jobs;
  }
}

export const jobsService = new JobsService();
