<template>
  <div>
    <table width="100%">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      <tr>
        <td>single</td>
        <td>是否同时只能展开一个面板</td>
        <td>Boolean</td>
        <td>——</td>
        <td>false</td>
      </tr>
      <tr>
        <td>selected</td>
        <td>存储展开面板的 name 的数组,可以用 .sync 修饰符绑定。</td>
        <td>Array</td>
        <td>——</td>
        <td>自己设定</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  }
}
</script>

<style lang="scss" scoped>
table{
  display: table;
  border-collapse: collapse;
  table-layout:fixed;
  td{
    text-align: center;
    word-wrap:break-word;
  }
}

</style>
