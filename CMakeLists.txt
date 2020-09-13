cmake_minimum_required(VERSION 3.2)
project(nyaa-nodejs-demo)
set(CMAKE_CXX_STANDARD 14)

include_directories("${PROJECT_BINARY_DIR}")
include_directories("${PROJECT_SOURCE_DIR}/first_build")
include_directories(include)

set(EXTRA_LIBS ${EXTRA_LIBS} first_build)
