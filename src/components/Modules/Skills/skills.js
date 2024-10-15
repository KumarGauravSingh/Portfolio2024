import React from "react";
import javascript from '../../Images/javascript.png';
import aws from '../../Images/aws.png';
import database from '../../Images/database.png';
import os from '../../Images/os.png';
import rhel from '../../Images/redhat.png';
import monitoring from '../../Images/monitoring.png';
import grafana from '../../Images/grafana.png';
import vmware from '../../Images/vmware.png';
import docker from '../../Images/docker.png';
import bash from '../../Images/bash.png';
import webserver from '../../Images/webserver.png';
import git from '../../Images/git.png';
import frontend from '../../Images/fronend.png';
import backend from '../../Images/backend.png';
import html from '../../Images/html.png';
import skills from '../../Images/skills.png';

const Skills= () =>{
return (


    <div className="bg-indigo-100">

<h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold text-center pt-8">
        My Skills
      </h1>
	  <h5 className="text-gray-700 text-2xl font-semibold leading-none text-center pb-8">
              Come Checkout the stuff I can do.
            </h5>
	  
<div className="flex items-center w-screen">
            <div className="container mx-auto flex flex-wrap items-start my-8">
                <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                    <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <figure className="mb-2">
                            <img src={os} alt="" className="h-16 ml-auto mr-auto" />
                        </figure>
                        <div className="rounded-lg p-4 flex flex-col">
                            <div>
                                <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
                                    Operating System
                                </h5>
                                <span className="text-gray-600 leading-none text-center font-sans font-semibold">Extensive knowledge of the RHEL. Have also worked on Ubuntu and Windows Server 2016</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                    <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <figure className="mb-2">
                            <img src={rhel} alt="" className="h-16 ml-auto mr-auto" />
                        </figure>
                        <div className="rounded-lg p-4 flex flex-col">
                            <div>
                                <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
                                    RHEL
                                </h5>
                                <span className="text-gray-600 leading-none text-center font-sans font-semibold">Vulnerability Assesment Security Hardening, Troubleshooting issues like kernel panic and Ctrl D, LVM configuration, create centralized yum repository</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                    <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <figure className="mb-2">
                            <img src={webserver} alt="" className="h-16 ml-auto mr-auto" />
                        </figure>
                        <div className="rounded-lg p-4 flex flex-col">
                            <div>
                                <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
                                    Web Server
                                </h5>
                                <span className="text-gray-600 leading-none text-center font-sans font-semibold">Experienced in deploying applications with security hardening on Apache, Nginx, Tomcat ans IIS. Along with deploying website have worked on Nginx media server with nginx rtmp module. Also worked on resolving pen testing issues on server leavel.</span>
                            </div>

                        </div>
                    </div>
                </div>
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img src={database} alt="" className="h-16 ml-auto mr-auto" />
        </figure>
        <div className="rounded-lg p-4 flex flex-col">
          <div>
            <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
              Database
            </h5>
            <span className="text-gray-600 leading-none text-center font-sans font-semibold">In Depth knowledge of MySQL. Have worked on other databases like PostgreSQL and MongoDB. Have done replication, user creation, privilege management, etc</span>
          </div>
         
        </div>
      </div>
    </div>               
  </div>
</div>


<div className="flex items-center w-screen">
  <div className="container mx-auto flex flex-wrap items-start">

                <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                    <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <figure className="mb-2">
                            <img src={monitoring} alt="" className="h-16 mx-auto" />
                        </figure>
                        <div className="rounded-lg p-4 flex flex-col">
                            <div>
                                <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
                                    MONITORING TOOLS
                                </h5>
                                <span className="text-gray-600 leading-none text-center font-sans font-semibold">Have indepth knowledge of zabbix. Have fetched data using zabbix agent SNMP and API with preprocessing. Also worked on OpenNMS.</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                    <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <figure className="mb-2">
                            <img src={grafana} alt="" className="h-16 mx-auto" />
                        </figure>
                        <div className="rounded-lg p-4 flex flex-col">
                            <div>
                                <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
                                    GRAFANA
                                </h5>
                                <span className="text-gray-600 leading-none text-center font-sans font-semibold">Used grafana to visualize the data received from monitoring tools.</span>
                            </div>

                        </div>
                    </div>
                </div>
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img src={bash} alt="" className="h-16 ml-auto mr-auto" />
        </figure>
        <div className="rounded-lg p-4 flex flex-col">
          <div>
            <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
              BASH
            </h5>
            <span className="text-gray-600 leading-none text-center font-sans font-semibold">Experienced in creating bash script for linux servers for cronjobs. Have created scripts for deploying hosts on Zabbix server also.</span>
          </div>
         
        </div>
      </div>
    </div>
                <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                    <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <figure className="mb-2">
                            <img src={aws} alt="" className="h-16 ml-auto mr-auto" />
                        </figure>
                        <div className="rounded-lg p-4 flex flex-col">
                            <div>
                                <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
                                    AWS
                                </h5>
                                <span className="text-gray-600 leading-none text-center font-sans font-semibold">Well versed with the basics of AWS like EC2, Auto scaling, Load balancing, route 53, IAM roles, etc.</span>
                            </div>

                        </div>
                    </div>
                </div>
    
  </div>
</div>

<div className="flex items-center w-screen">
            <div className="container mx-auto flex flex-wrap items-start">
                <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                    <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <figure className="mb-2">
                            <img src={docker} alt="" className="h-16 mx-auto" />
                        </figure>
                        <div className="rounded-lg p-4 flex flex-col">
                            <div>
                                <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
                                    DOCKER
                                </h5>
                                <span className="text-gray-600 leading-none text-center font-sans font-semibold">Can deploy docker containers with customized docker files.</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                    <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <figure className="mb-2">
                            <img src={git} alt="" className="h-16 ml-auto mr-auto" />
                        </figure>
                        <div className="rounded-lg p-4 flex flex-col">
                            <div>
                                <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
                                    Git
                                </h5>
                                <span className="text-gray-600 leading-none text-center font-sans font-semibold">Well versed with Git version control tool.</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                    <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <figure className="mb-2">
                            <img src={vmware} alt="" className="h-16 mx-auto" />
                        </figure>
                        <div className="rounded-lg p-4 flex flex-col">
                            <div>
                                <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
                                    Vmware
                                </h5>
                                <span className="text-gray-600 leading-none text-center font-sans font-semibold">Can do basics like create and manage VMs, Alarms etc</span>
                            </div>

                        </div>
                    </div>
                </div>
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img src={backend} alt="" className="h-16 ml-auto mr-auto" />
        </figure>
        <div className="rounded-lg p-4 flex flex-col">
          <div>
            <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
              Back End Development
            </h5>
            <span className="text-gray-600 leading-none text-center font-sans font-semibold">Have created robust and secured application with JAVA (Spring and Sprinboot Framework) in the past. Have also worked on the PHP applications (mainly CodeIgniter)</span>
          </div>
         
        </div>
      </div>
    </div>
    
    
  </div>
</div>

        <div className="flex items-center w-screen">
            <div className="container mx-auto flex flex-wrap items-start">
                <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                    <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <figure className="mb-2">
                            <img src={frontend} alt="" className="h-16 mx-auto" />
                        </figure>
                        <div className="rounded-lg p-4 flex flex-col">
                            <div>
                                <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
                                    Front End Development
                                </h5>
                                <span className="text-gray-600 leading-none text-center font-sans font-semibold">Can create beautiful applications with REACT in the frontend</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                    <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <figure className="mb-2">
                            <img src={html} alt="" className="h-16 ml-auto mr-auto" />
                        </figure>
                        <div className="rounded-lg p-4 flex flex-col">
                            <div>
                                <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
                                    HTML and CSS
                                </h5>
                                <span className="text-gray-600 leading-none text-center font-sans font-semibold">Can create beautiful UI with HTML 5 and CSS. Have worked on CSS frameworks like Tailwind CSS and BootStrap</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                    <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <figure className="mb-2">
                            <img src={javascript} alt="" className="h-16 mx-auto" />
                        </figure>
                        <div className="rounded-lg p-4 flex flex-col">
                            <div>
                                <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
                                    JAVASCRIPT
                                </h5>
                                <span className="text-gray-600 leading-none text-center font-sans font-semibold">Well versed with the ES6+ concepts.</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                    <div className="rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <figure className="mb-2">
                            <img src={skills} alt="" className="h-16 ml-auto mr-auto" />
                        </figure>
                        <div className="rounded-lg p-4 flex flex-col">
                            <div>
                                <h5 className="text-green-600 text-2xl font-bold leading-none text-center">
                                    Other Skills
                                </h5>
                                <span className="text-gray-600 leading-none text-center font-sans font-semibold">Brilliant conversation skills developed while working with the clients in the my current Job. Can also do basic Photoshop for design purposes. </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

</div>


);
}

export default Skills;